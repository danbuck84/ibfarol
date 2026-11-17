export type ResourceFile = {
  id: string;
  name: string;
  role: "guide" | "student" | "slides" | "spreadsheet" | "document";
  labelPt: string;
  labelEn: string;
  previewUrl: string;
  downloadUrl: string;
  isPdf: boolean;
};

export type ResourceItem = {
  id: string;
  date: string; // YYYY-MM-DD or "" for timeless church docs
  type: "sermon" | "ebd" | "document";
  series: string;
  title: string;
  scripture: string;
  bibleBooks: string[];
  speaker: string;
  themes: string[];
  videoUrl?: string;
  youtubeId?: string;
  files: ResourceFile[];
};

const ROOT_FOLDER_ID = "1bqcHjARUNoxh1seFbc5YQlEmnqojiASD";
const DEFAULT_INDEX_SHEET_ID = "1NAcCwXyyUKiNovRV1_asXmNmYu1gwN7RUp91I5OH_G0";

// Canonical order of the 66 books of the Bible (Portuguese)
export const CANONICAL_BIBLE_BOOKS = [
  "Gênesis", "Êxodo", "Levítico", "Números", "Deuteronômio",
  "Josué", "Juízes", "Rute", "1 Samuel", "2 Samuel",
  "1 Reis", "2 Reis", "1 Crônicas", "2 Crônicas", "Esdras",
  "Neemias", "Ester", "Jó", "Salmos", "Salmo", "Provérbios",
  "Eclesiastes", "Cantares", "Isaías", "Jeremias", "Lamentações",
  "Ezequiel", "Daniel", "Oseias", "Joel", "Amós",
  "Obadias", "Jonas", "Miqueias", "Naum", "Habacuque",
  "Sofonias", "Ageu", "Zacarias", "Malaquias",
  "Mateus", "Marcos", "Lucas", "João", "Atos",
  "Romanos", "1 Coríntios", "2 Coríntios", "Gálatas", "Efésios",
  "Filipenses", "Colossenses", "1 Tessalonicenses", "2 Tessalonicenses",
  "1 Timóteo", "2 Timóteo", "Tito", "Filemom", "Hebreus",
  "Tiago", "1 Pedro", "2 Pedro", "1 João", "2 João",
  "3 João", "Judas", "Apocalipse",
];

type RawDriveFile = {
  id: string;
  title: string;
  href: string;
  folderName: string;
  parentFolderName: string;
};

type IndexRow = {
  date: string;
  type: string;
  series: string;
  title: string;
  scripture: string;
  speaker: string;
  themes: string[];
  videoUrl: string;
};

function decodeHtmlEntities(str: string): string {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function normalizeForMatch(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "");
}

function extractYoutubeId(url?: string): string | undefined {
  if (!url) return undefined;
  const match = url.match(/(?:v=|youtu\.be\/|\/live\/)([A-Za-z0-9_-]{11})/);
  return match ? match[1] : undefined;
}

export function extractBibleBooks(scripture: string): string[] {
  if (!scripture) return [];
  const found: string[] = [];
  let remaining = scripture;

  // Match numbered books first (e.g. "1 Coríntios", "2 Timóteo") so "1 João" isn't matched as "João"
  const sortedByLength = [...CANONICAL_BIBLE_BOOKS].sort((a, b) => b.length - a.length);
  for (const book of sortedByLength) {
    const escaped = book.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(^|[^a-zA-ZÀ-ÿ0-9])${escaped}(?=$|[^a-zA-ZÀ-ÿ])`, "i");
    if (regex.test(remaining)) {
      const canonical = book === "Salmo" ? "Salmos" : book;
      if (!found.includes(canonical)) {
        found.push(canonical);
      }
      remaining = remaining.replace(new RegExp(escaped, "gi"), " ");
    }
  }

  return found.sort(
    (a, b) => CANONICAL_BIBLE_BOOKS.indexOf(a) - CANONICAL_BIBLE_BOOKS.indexOf(b)
  );
}

function parseEmbeddedFolderHtml(html: string): {
  folders: { id: string; title: string }[];
  files: { id: string; title: string; href: string }[];
  sheets: { id: string; title: string }[];
} {
  const folders: { id: string; title: string }[] = [];
  const files: { id: string; title: string; href: string }[] = [];
  const sheets: { id: string; title: string }[] = [];

  const entryRegex =
    /<div class="flip-entry" id="entry-([^"]+)"[\s\S]*?<a href="([^"]+)"[\s\S]*?<div class="flip-entry-title">([^<]+)<\/div>/g;
  let match: RegExpExecArray | null;

  while ((match = entryRegex.exec(html)) !== null) {
    const id = match[1].trim();
    const href = match[2].trim();
    const title = decodeHtmlEntities(match[3]);

    if (href.includes("/drive/folders/")) {
      folders.push({ id, title });
    } else if (href.includes("docs.google.com/spreadsheets/d/")) {
      sheets.push({ id, title });
    } else {
      files.push({ id, title, href });
    }
  }

  return { folders, files, sheets };
}

async function fetchFolderEntries(folderId: string) {
  const res = await fetch(
    `https://drive.google.com/embeddedfolderview?id=${folderId}#list`,
    { next: { revalidate: 300 } }
  );
  if (!res.ok) throw new Error(`Failed to fetch folder ${folderId}`);
  const html = await res.text();
  return parseEmbeddedFolderHtml(html);
}

async function crawlDriveFolderTree(rootId: string): Promise<{
  files: RawDriveFile[];
  indexSheetId: string;
}> {
  const allFiles: RawDriveFile[] = [];
  let indexSheetId = DEFAULT_INDEX_SHEET_ID;

  async function walk(folderId: string, folderName: string, parentFolderName: string, depth: number) {
    if (depth > 4) return;
    const { folders, files, sheets } = await fetchFolderEntries(folderId);

    for (const s of sheets) {
      if (normalizeForMatch(s.title).includes("indicedabiblioteca")) {
        indexSheetId = s.id;
      }
    }

    for (const f of files) {
      allFiles.push({
        id: f.id,
        title: f.title,
        href: f.href,
        folderName,
        parentFolderName,
      });
    }

    await Promise.all(
      folders.map((sub) => walk(sub.id, sub.title, folderName, depth + 1))
    );
  }

  await walk(rootId, "Igreja Batista Farol", "", 0);
  return { files: allFiles, indexSheetId };
}

function parseCsvLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  result.push(current.trim());
  return result;
}

function parseIndexCsv(csvText: string): IndexRow[] {
  const lines = csvText
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
  if (lines.length <= 1) return [];

  const rows: IndexRow[] = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = parseCsvLine(lines[i]);
    if (cols.length < 4) continue;
    const [date, type, series, title, scripture, speaker, themesRaw, videoUrl] = cols;
    if (!date || !title) continue;
    const themes = (themesRaw || "")
      .split(";")
      .map((t) => t.trim())
      .filter(Boolean);
    rows.push({
      date: date.trim(),
      type: (type || "").trim(),
      series: (series || "").trim(),
      title: title.trim(),
      scripture: (scripture || "").trim(),
      speaker: (speaker || "Pr. Gustavo Santos").trim(),
      themes,
      videoUrl: (videoUrl || "").trim(),
    });
  }
  return rows;
}

function buildResourceFile(id: string, filename: string): ResourceFile {
  const lower = filename.toLowerCase();
  const isPdf = lower.endsWith(".pdf");

  let role: ResourceFile["role"] = "document";
  let labelPt = "Abrir Documento";
  let labelEn = "Open Document";

  if (lower.includes("(guia da mensagem)")) {
    role = "guide";
    labelPt = "Guia da Mensagem";
    labelEn = "Message Guide";
  } else if (lower.includes("(material do aluno)")) {
    role = "student";
    labelPt = "Material do Aluno";
    labelEn = "Student Handout";
  } else if (lower.includes("(slides)")) {
    role = "slides";
    labelPt = "Slides";
    labelEn = "Slides";
  } else if (lower.includes("(planilha") || lower.endsWith(".xlsx")) {
    role = "spreadsheet";
    labelPt = "Planilha de Orçamento";
    labelEn = "Budget Spreadsheet";
  }

  return {
    id,
    name: filename,
    role,
    labelPt,
    labelEn,
    previewUrl: `https://drive.google.com/file/d/${id}/preview`,
    downloadUrl: `https://drive.google.com/uc?export=download&id=${id}`,
    isPdf,
  };
}

function parseDriveFilename(rawFile: RawDriveFile): {
  date: string;
  scriptureFromTitle: string;
  cleanTitle: string;
  inferredType: "sermon" | "ebd" | "document";
  inferredSeries: string;
} {
  const base = rawFile.title
    .replace(/\.(pdf|xlsx|docx)$/i, "")
    .replace(/\s*\((guia da mensagem|material do aluno|slides|planilha[^)]*)\)\s*$/i, "")
    .trim();

  const isEbdFolder =
    rawFile.folderName.toLowerCase().includes("ebd") ||
    rawFile.parentFolderName.toLowerCase().includes("ebd");
  const isSermonFolder =
    rawFile.parentFolderName.toLowerCase().includes("serm") ||
    rawFile.folderName.toLowerCase().includes("serm");

  const inferredType: "sermon" | "ebd" | "document" = isEbdFolder
    ? "ebd"
    : isSermonFolder
    ? "sermon"
    : "document";

  const cleanFolderSeries = rawFile.folderName
    .replace(/\s*\(\d{4}[–-]\d{4}\)\s*$/, "")
    .replace(/\s*\(\d{4}\)\s*$/, "")
    .replace(/\s*—\s*/g, " · ")
    .trim();

  // Pattern: YYYY-MM-DD — Part1 — Part2 (Sermon) or YYYY-MM-DD — Title (EBD)
  const dateMatch = base.match(/^(\d{4}-\d{2}-\d{2})\s*[—–-]\s*(.+)$/);
  if (!dateMatch) {
    return {
      date: "",
      scriptureFromTitle: "",
      cleanTitle: base,
      inferredType: "document",
      inferredSeries: cleanFolderSeries || "Documentos da Igreja",
    };
  }

  const date = dateMatch[1];
  const rest = dateMatch[2].trim();

  if (inferredType === "sermon") {
    const parts = rest.split(/\s+—\s+/);
    if (parts.length >= 2) {
      return {
        date,
        scriptureFromTitle: parts[0].trim(),
        cleanTitle: parts.slice(1).join(" — ").trim(),
        inferredType,
        inferredSeries: cleanFolderSeries,
      };
    }
  }

  return {
    date,
    scriptureFromTitle: "",
    cleanTitle: rest,
    inferredType,
    inferredSeries: cleanFolderSeries,
  };
}

function mergeDriveAndIndex(
  rawFiles: RawDriveFile[],
  indexRows: IndexRow[]
): ResourceItem[] {
  const items: ResourceItem[] = [];
  const usedFileIds = new Set<string>();

  const parsedFiles = rawFiles.map((f) => ({
    raw: f,
    parsed: parseDriveFilename(f),
    resourceFile: buildResourceFile(f.id, f.title),
  }));

  // 1. Build items from Index Sheet rows and attach matching Drive files
  for (const row of indexRows) {
    const rowType: "sermon" | "ebd" =
      row.type.toLowerCase().includes("ebd") || row.type.toLowerCase().includes("aula")
        ? "ebd"
        : "sermon";
    const normRowTitle = normalizeForMatch(row.title);

    const matchingFiles = parsedFiles.filter((pf) => {
      if (pf.parsed.date !== row.date) return false;
      if (pf.parsed.inferredType !== rowType) return false;
      const normFileTitle = normalizeForMatch(pf.parsed.cleanTitle);
      return (
        normFileTitle === normRowTitle ||
        normFileTitle.includes(normRowTitle) ||
        normRowTitle.includes(normFileTitle)
      );
    });

    // Fallback: if only one group of that type exists on that exact date, match by date + type
    const finalMatches =
      matchingFiles.length > 0
        ? matchingFiles
        : parsedFiles.filter(
            (pf) =>
              pf.parsed.date === row.date &&
              pf.parsed.inferredType === rowType &&
              !usedFileIds.has(pf.raw.id)
          );

    // If every file for this row was deleted from Drive, skip the row so deleted items disappear
    if (finalMatches.length === 0) continue;

    const attachedFiles: ResourceFile[] = [];
    for (const m of finalMatches) {
      usedFileIds.add(m.raw.id);
      attachedFiles.push(m.resourceFile);
    }

    // Order files: guide/student first, slides second, spreadsheet/other third
    const roleOrder: Record<ResourceFile["role"], number> = {
      guide: 1,
      student: 1,
      slides: 2,
      spreadsheet: 3,
      document: 4,
    };
    attachedFiles.sort((a, b) => roleOrder[a.role] - roleOrder[b.role]);

    const cleanSeries = row.series
      .replace(/\s*·\s*Aula\s+\d+$/i, "")
      .replace(/\s*·\s*(Descontentamento|Inveja)\s+[IVX]+$/i, "")
      .replace(/\s*·\s*O homem no casamento$/i, "")
      .trim();

    items.push({
      id: `${row.date}-${rowType}-${normalizeForMatch(row.title).slice(0, 24)}`,
      date: row.date,
      type: rowType,
      series: cleanSeries || row.series,
      title: row.title,
      scripture: row.scripture,
      bibleBooks: extractBibleBooks(row.scripture),
      speaker: row.speaker || "Pr. Gustavo Santos",
      themes: row.themes,
      videoUrl: row.videoUrl || undefined,
      youtubeId: extractYoutubeId(row.videoUrl),
      files: attachedFiles,
    });
  }

  // 2. Group any remaining Drive files not listed in the spreadsheet (e.g. newly uploaded files or church documents)
  const remainingGroups = new Map<string, typeof parsedFiles>();
  for (const pf of parsedFiles) {
    if (usedFileIds.has(pf.raw.id)) continue;
    const key = `${pf.parsed.date}|${pf.parsed.inferredType}|${normalizeForMatch(
      pf.parsed.cleanTitle
    )}`;
    const group = remainingGroups.get(key) || [];
    group.push(pf);
    remainingGroups.set(key, group);
  }

  for (const [, group] of remainingGroups.entries()) {
    const first = group[0];
    const files = group.map((g) => g.resourceFile);
    const scripture = first.parsed.scriptureFromTitle;
    items.push({
      id: `${first.parsed.date || "doc"}-${first.parsed.inferredType}-${normalizeForMatch(
        first.parsed.cleanTitle
      ).slice(0, 24)}`,
      date: first.parsed.date,
      type: first.parsed.inferredType,
      series: first.parsed.inferredSeries,
      title: first.parsed.cleanTitle,
      scripture,
      bibleBooks: extractBibleBooks(scripture),
      speaker: first.parsed.inferredType === "document" ? "Igreja Batista Farol" : "Pr. Gustavo Santos",
      themes:
        first.parsed.inferredType === "document"
          ? ["Igreja", "Institucional"]
          : [],
      files,
    });
  }

  // Sort: dated items descending by date (newest first), then documents alphabetically
  items.sort((a, b) => {
    if (a.date && b.date) {
      if (b.date !== a.date) return b.date.localeCompare(a.date);
      if (a.type !== b.type) return a.type === "ebd" ? -1 : 1;
      return a.title.localeCompare(b.title);
    }
    if (a.date && !b.date) return -1;
    if (!a.date && b.date) return 1;
    return a.title.localeCompare(b.title);
  });

  return items;
}

// Snapshot fallback of the current Drive folders + Index Sheet in case Google temporarily rate-limits SSR requests
const FALLBACK_RAW_FILES: RawDriveFile[] = [
  { id: "1bc2Po9dtVESD5XrRF8X_1rEUwaVAXegl", title: "Apostila - Classe de Novos Membros.pdf", href: "", folderName: "Classe de Novos Membros", parentFolderName: "Aulas" },
  { id: "1dwfrJw8Mk0R7IobgyqEUTyAH25vb-evf", title: "Declaração Doutrinária.pdf", href: "", folderName: "Estrutura", parentFolderName: "Igreja Batista Farol" },
  { id: "1h5r83GQJDpllPMEFS2lPmM7ODWL2Q0XJ", title: "Pacto de Membresia.pdf", href: "", folderName: "Estrutura", parentFolderName: "Igreja Batista Farol" },
  { id: "1z41q49ig6SGvnF2mswMtX1OEEj9uvFYh", title: "Plano de Leitura Bíblica Anual.pdf", href: "", folderName: "Outros Materiais", parentFolderName: "Igreja Batista Farol" },
  // EBD — Aconselhamento Bíblico (2026)
  { id: "1WKYkuEvpQR2i3ot9RInx0JkwCXHBmgza", title: "2026-08-02 — O evangelho e as dinâmicas do coração (material do aluno).pdf", href: "", folderName: "EBD — Aconselhamento Bíblico (2026)", parentFolderName: "EBD 2026" },
  { id: "1qVN4kgDXHB380CigVmyD2bTC6gMPikFu", title: "2026-08-02 — O evangelho e as dinâmicas do coração (slides).pdf", href: "", folderName: "EBD — Aconselhamento Bíblico (2026)", parentFolderName: "EBD 2026" },
  { id: "1tvxDxN0KAxVFR3eW9R5AlN72EVUi2p7r", title: "2026-08-09 — Temor a homens (material do aluno).pdf", href: "", folderName: "EBD — Aconselhamento Bíblico (2026)", parentFolderName: "EBD 2026" },
  { id: "1hplROPK-2pQt43aSFl9D9xHFSD0CDICO", title: "2026-08-09 — Temor a homens (slides).pdf", href: "", folderName: "EBD — Aconselhamento Bíblico (2026)", parentFolderName: "EBD 2026" },
  { id: "1wtuAYvVcbW2T1VJ2SUFnBEGLm7-aFKeo", title: "2026-08-16 — Ira e amargura (material do aluno).pdf", href: "", folderName: "EBD — Aconselhamento Bíblico (2026)", parentFolderName: "EBD 2026" },
  { id: "19VBQA9-TtZQgZWMNLKezr-QpoOu7dPat", title: "2026-08-16 — Ira e amargura (slides).pdf", href: "", folderName: "EBD — Aconselhamento Bíblico (2026)", parentFolderName: "EBD 2026" },
  { id: "1Nm5IWeh1_et5UU3VzZLaGtrDoowWIW3T", title: "2026-09-06 — Vocês não são de si mesmos (material do aluno).pdf", href: "", folderName: "EBD — Aconselhamento Bíblico (2026)", parentFolderName: "EBD 2026" },
  { id: "1JjvStRP7qluNg93UeGDaV1g4f1jPqzEZ", title: "2026-09-06 — Vocês não são de si mesmos (slides).pdf", href: "", folderName: "EBD — Aconselhamento Bíblico (2026)", parentFolderName: "EBD 2026" },
  { id: "1L_iETSHVo2kafibEt0qUzF7nucG8-q6B", title: "2026-09-13 — Contentamento se aprende (material do aluno).pdf", href: "", folderName: "EBD — Aconselhamento Bíblico (2026)", parentFolderName: "EBD 2026" },
  { id: "16t1eyhlEuGDiXgWeo9SgkNL5VK9qcMZs", title: "2026-09-13 — Contentamento se aprende (slides).pdf", href: "", folderName: "EBD — Aconselhamento Bíblico (2026)", parentFolderName: "EBD 2026" },
  { id: "18eeznjdWDFBzjoj5Q62brEKDEY7VE6-5", title: "2026-09-20 — O que Deus prometeu — e o que ele não prometeu (material do aluno).pdf", href: "", folderName: "EBD — Aconselhamento Bíblico (2026)", parentFolderName: "EBD 2026" },
  { id: "1rJERac8FICvg67vAY9Ebcy7Aj4JEKfCW", title: "2026-09-20 — O que Deus prometeu — e o que ele não prometeu (slides).pdf", href: "", folderName: "EBD — Aconselhamento Bíblico (2026)", parentFolderName: "EBD 2026" },
  { id: "10WzmlBt9pNFqAueRFB-QB5S9MNrkoGTa", title: "2026-10-04 — O que é a inveja — e o que ela custa (material do aluno).pdf", href: "", folderName: "EBD — Aconselhamento Bíblico (2026)", parentFolderName: "EBD 2026" },
  { id: "1DfiWMY3mC96_CJoe8y232zgpqrn8z5JO", title: "2026-10-04 — O que é a inveja — e o que ela custa (slides).pdf", href: "", folderName: "EBD — Aconselhamento Bíblico (2026)", parentFolderName: "EBD 2026" },
  { id: "1t8Hm9oiMoCOL-r39Bd4C_-W0VBOaAWj8", title: "2026-10-11 — Avaliar, amar, alegrar, agradecer (material do aluno).pdf", href: "", folderName: "EBD — Aconselhamento Bíblico (2026)", parentFolderName: "EBD 2026" },
  { id: "10THvs1DSmFEX0O9ppqSl96RXFPzzVwZP", title: "2026-10-11 — Avaliar, amar, alegrar, agradecer (slides).pdf", href: "", folderName: "EBD — Aconselhamento Bíblico (2026)", parentFolderName: "EBD 2026" },
  // EBD — Discipulado (2026)
  { id: "1AobSO8BTAXYLT61CA_AZdtq0Ocr0_hwj", title: "2026-07-12 — Características de um discípulo (material do aluno).pdf", href: "", folderName: "EBD — Discipulado (2026)", parentFolderName: "EBD 2026" },
  { id: "1-yC3rP8OJGmwET-f7dqpOXc56c97WTL9", title: "2026-07-12 — Características de um discípulo (slides).pdf", href: "", folderName: "EBD — Discipulado (2026)", parentFolderName: "EBD 2026" },
  { id: "1ypY_vLONVb8qPtju1uDTeZ6O3GdHYQQn", title: "2026-07-19 — Fazendo discípulos (material do aluno).pdf", href: "", folderName: "EBD — Discipulado (2026)", parentFolderName: "EBD 2026" },
  { id: "1XT6hOuYgsBdz6N5VvoMDiFzVnEViNJor", title: "2026-07-19 — Fazendo discípulos (slides).pdf", href: "", folderName: "EBD — Discipulado (2026)", parentFolderName: "EBD 2026" },
  // EBD — Família (2026)
  { id: "15w24NHB6e9GTWyg-bOI5Lab_OHVd3g0B", title: "2026-04-12 — O casamento no plano de Deus (material do aluno).pdf", href: "", folderName: "EBD — Família (2026)", parentFolderName: "EBD 2026" },
  { id: "1c1lsJUzgJ3QA584trJVJn9IhDI6rGcd7", title: "2026-04-12 — O casamento no plano de Deus (slides).pdf", href: "", folderName: "EBD — Família (2026)", parentFolderName: "EBD 2026" },
  { id: "1lqxcADMx7f0FmbcCLTBXRfAILh7d8SG3", title: "2026-10-18 — O homem que a igreja forma (material do aluno).pdf", href: "", folderName: "EBD — Família (2026)", parentFolderName: "EBD 2026" },
  { id: "1sAivhA7VdSQHtBIgF-iU-D01KhxUJ8Tw", title: "2026-10-18 — O homem que a igreja forma (slides).pdf", href: "", folderName: "EBD — Família (2026)", parentFolderName: "EBD 2026" },
  { id: "1wC1eM0kTRc1sUWT2yn8hjSwmg9UUYa6v", title: "2026-11-01 — Pais e filhos — pastoreando o coração (material do aluno).pdf", href: "", folderName: "EBD — Família (2026)", parentFolderName: "EBD 2026" },
  { id: "1uc57RBBJp6K1rI4YpKoJjfviHEPNTnmK", title: "2026-11-01 — Pais e filhos — pastoreando o coração (slides).pdf", href: "", folderName: "EBD — Família (2026)", parentFolderName: "EBD 2026" },
  // EBD — Finanças (2026)
  { id: "1SI8R6WQYyWhMNgph_VZ3v2waFBlx-Uyd", title: "2026-11-08 — Onde está o seu tesouro (material do aluno).pdf", href: "", folderName: "EBD — Finanças (2026)", parentFolderName: "EBD 2026" },
  { id: "1XkO1u58v0VDlLlqlMUuOjII9IjrAtIbL", title: "2026-11-08 — Onde está o seu tesouro (planilha de orçamento).xlsx", href: "", folderName: "EBD — Finanças (2026)", parentFolderName: "EBD 2026" },
  { id: "1is0kuVc7rZe_QimHuADrR3dMuIt9ZpI9", title: "2026-11-08 — Onde está o seu tesouro (slides).pdf", href: "", folderName: "EBD — Finanças (2026)", parentFolderName: "EBD 2026" },
  { id: "1kU3sbwCCNC8SUfQhHOyykCRgHwGeyNfR", title: "2026-11-15 — Parceiros no evangelho (material do aluno).pdf", href: "", folderName: "EBD — Finanças (2026)", parentFolderName: "EBD 2026" },
  { id: "1fOvTIjANTAhuo0gRMhDKN-HvZIr-FldC", title: "2026-11-15 — Parceiros no evangelho (slides).pdf", href: "", folderName: "EBD — Finanças (2026)", parentFolderName: "EBD 2026" },
  // EBD — O cristão e a política (2026)
  { id: "1kt9DFtSZu0VRY_dm2bkZAv4cnRa-cDPI", title: "2026-09-27 — O Rei perfeito não está na urna (material do aluno).pdf", href: "", folderName: "EBD — O cristão e a política (2026)", parentFolderName: "EBD 2026" },
  { id: "1HUkC8Q6aIBqGiHcSmmeC9jF0Uv_A0Od8", title: "2026-09-27 — O Rei perfeito não está na urna (slides).pdf", href: "", folderName: "EBD — O cristão e a política (2026)", parentFolderName: "EBD 2026" },
  // Sermões — Efésios — Em Cristo (2026)
  { id: "1Z_5hnedITBPoAnVla9YUxrv9NOQ6iPV2", title: "2026-07-19 — Efésios 1.15–23 — Olhos para ver a Cristo (guia da mensagem).pdf", href: "", folderName: "Efésios — Em Cristo (2026)", parentFolderName: "Sermões" },
  { id: "1v7xFrkXWPnRg4Xi4vbmzbpKa_CkD1iW5", title: "2026-07-19 — Efésios 1.15–23 — Olhos para ver a Cristo (slides).pdf", href: "", folderName: "Efésios — Em Cristo (2026)", parentFolderName: "Sermões" },
  { id: "1wa5-TOqgomrGdmiwlaZpknEhIKVqb4Hx", title: "2026-08-02 — Efésios 2.1–10 — Uma nova identidade em Cristo (guia da mensagem).pdf", href: "", folderName: "Efésios — Em Cristo (2026)", parentFolderName: "Sermões" },
  { id: "1c34p52Iv1DDJytTvhWs0Qe9S9t3dv11-", title: "2026-08-02 — Efésios 2.1–10 — Uma nova identidade em Cristo (slides).pdf", href: "", folderName: "Efésios — Em Cristo (2026)", parentFolderName: "Sermões" },
  { id: "1ImnJPX8WNDBTt63CRYcf8grxr0wTmSr1", title: "2026-08-09 — Efésios 2.11–22 — Uma nova comunidade em Cristo (guia da mensagem).pdf", href: "", folderName: "Efésios — Em Cristo (2026)", parentFolderName: "Sermões" },
  { id: "1_8ZHSrmGKeamO_-BJJHAA5fDPVzpz3j8", title: "2026-08-09 — Efésios 2.11–22 — Uma nova comunidade em Cristo (slides).pdf", href: "", folderName: "Efésios — Em Cristo (2026)", parentFolderName: "Sermões" },
  { id: "1eCRap6cfrOo3Wi9qiUjkQOxOzm1k6wiG", title: "2026-08-16 — Efésios 3.1–13 — O mosaico da graça de Deus (guia da mensagem).pdf", href: "", folderName: "Efésios — Em Cristo (2026)", parentFolderName: "Sermões" },
  { id: "1s8uPZ-ssaFMdwwcFRT9fzBvZmz1L2zyz", title: "2026-08-16 — Efésios 3.1–13 — O mosaico da graça de Deus (slides).pdf", href: "", folderName: "Efésios — Em Cristo (2026)", parentFolderName: "Sermões" },
  { id: "1D8YaQdT-r5HxwRprusxdUixjg_gOYRA8", title: "2026-09-06 — Efésios 4.1–6 — Uma igreja saudável é marcada pela unidade espiritual (guia da mensagem).pdf", href: "", folderName: "Efésios — Em Cristo (2026)", parentFolderName: "Sermões" },
  { id: "1X5xhz-w52bMf9vSaJqwSD51FSYf2d2_d", title: "2026-09-06 — Efésios 4.1–6 — Uma igreja saudável é marcada pela unidade espiritual (slides).pdf", href: "", folderName: "Efésios — Em Cristo (2026)", parentFolderName: "Sermões" },
  { id: "1fcZaXbC7q-yRRXHScQAzQnF67-FYf9z2", title: "2026-09-13 — Efésios 4.7–16 — Uma igreja saudável é marcada por diversidade e por maturidade (guia da mensagem).pdf", href: "", folderName: "Efésios — Em Cristo (2026)", parentFolderName: "Sermões" },
  { id: "1wHdZm2UgLxez_OkStjCiSVvmmojhf6Mp", title: "2026-09-13 — Efésios 4.7–16 — Uma igreja saudável é marcada por diversidade e por maturidade (slides).pdf", href: "", folderName: "Efésios — Em Cristo (2026)", parentFolderName: "Sermões" },
  { id: "1KfnuyMltdr7T98_d_ziGb7RqmVMwSs8p", title: "2026-09-27 — Efésios 4.25–5.5 — Uma vida coerente (guia da mensagem).pdf", href: "", folderName: "Efésios — Em Cristo (2026)", parentFolderName: "Sermões" },
  { id: "1Yfk1qmrXOvA4iiarLZ0P4a_dxRZpBtEx", title: "2026-09-27 — Efésios 4.25–5.5 — Uma vida coerente (slides).pdf", href: "", folderName: "Efésios — Em Cristo (2026)", parentFolderName: "Sermões" },
  { id: "1iCY0u3cVcdnBuGcxRtmfLdS9BHB7QWbL", title: "2026-10-18 — Efésios 5.21–33 — O casamento cheio do Espírito (guia da mensagem).pdf", href: "", folderName: "Efésios — Em Cristo (2026)", parentFolderName: "Sermões" },
  { id: "10Ez0syh6LNCyaS_5GlmM15P4JYi9ZO69", title: "2026-10-18 — Efésios 5.21–33 — O casamento cheio do Espírito (slides).pdf", href: "", folderName: "Efésios — Em Cristo (2026)", parentFolderName: "Sermões" },
  { id: "1CU-qmEbgXn2bNuwlFIftpdq5hGtwbJc4", title: "2026-11-01 — Efésios 6.5–9 — Para quem você trabalha? (guia da mensagem).pdf", href: "", folderName: "Efésios — Em Cristo (2026)", parentFolderName: "Sermões" },
  { id: "1TQuC-xJeLQrsblt5i0tSYgwsizD2HUAR", title: "2026-11-01 — Efésios 6.5–9 — Para quem você trabalha? (slides).pdf", href: "", folderName: "Efésios — Em Cristo (2026)", parentFolderName: "Sermões" },
  { id: "1Nfva8hysSV8wYPmTw4cfYJ2SU7zD0Wb_", title: "2026-11-08 — Efésios 6.10–24 — Vestindo-se para a guerra (guia da mensagem).pdf", href: "", folderName: "Efésios — Em Cristo (2026)", parentFolderName: "Sermões" },
  { id: "19xxWK0aUXQLZfCyGwuBhZ60R-5IGNFUp", title: "2026-11-08 — Efésios 6.10–24 — Vestindo-se para a guerra (slides).pdf", href: "", folderName: "Efésios — Em Cristo (2026)", parentFolderName: "Sermões" },
  // Sermões — Gênesis
  { id: "1PvBEsrkCO1YlU1MzzdLiuQoNRuNQfRRf", title: "2026-05-17 — Gênesis 1.1–2.3 — O Deus por trás da história (guia da mensagem).pdf", href: "", folderName: "Gênesis — O Deus por trás da história (2026)", parentFolderName: "Sermões" },
  { id: "1Dr7AzVBaCfTaLi97FoaF0SNLStXGUdPY", title: "2026-05-17 — Gênesis 1.1–2.3 — O Deus por trás da história (slides).pdf", href: "", folderName: "Gênesis — O Deus por trás da história (2026)", parentFolderName: "Sermões" },
  { id: "1lS1UEQSmTQ97bQwQdnLO4MVBnXSR_TAf", title: "2026-05-24 — Gênesis 2.4–17 — Formados por Deus (guia da mensagem).pdf", href: "", folderName: "Gênesis — O Deus por trás da história (2026)", parentFolderName: "Sermões" },
  { id: "15cRPXUtyKcfcTxTl0HScxS-UWc0D0fhs", title: "2026-05-24 — Gênesis 2.4–17 — Formados por Deus (slides).pdf", href: "", folderName: "Gênesis — O Deus por trás da história (2026)", parentFolderName: "Sermões" },
  { id: "1MDe3eGV8pYa6_UdnCx1sp3WDa2tFZ9WZ", title: "2026-05-31 — Gênesis 2.18–25 — Uma só carne (guia da mensagem).pdf", href: "", folderName: "Gênesis — O Deus por trás da história (2026)", parentFolderName: "Sermões" },
  { id: "1iB9aMwgBmI9R0SgAcxQik1N3iJhuqbxI", title: "2026-05-31 — Gênesis 2.18–25 — Uma só carne (slides).pdf", href: "", folderName: "Gênesis — O Deus por trás da história (2026)", parentFolderName: "Sermões" },
  { id: "18BaFPOKaGTaPxdqZvVMynaze7THbBHVB", title: "2026-06-07 — Gênesis 3.1–13 — Quando a mentira parece boa (guia da mensagem).pdf", href: "", folderName: "Gênesis — O Deus por trás da história (2026)", parentFolderName: "Sermões" },
  { id: "1VvdGlB0Wd3Iq7u_vdvRcCyS2yYHLDmu9", title: "2026-06-07 — Gênesis 3.1–13 — Quando a mentira parece boa (slides).pdf", href: "", folderName: "Gênesis — O Deus por trás da história (2026)", parentFolderName: "Sermões" },
  { id: "1ns9y2m_RDq2DuOw9vLEILgbrnfc_xwOn", title: "2026-06-14 — Gênesis 3.14–24 — Expulsos do jardim, guardados pela promessa (guia da mensagem).pdf", href: "", folderName: "Gênesis — O Deus por trás da história (2026)", parentFolderName: "Sermões" },
  { id: "1qOu6O8BeAwrzRuYhZqyb42WJNuJgtUOD", title: "2026-06-14 — Gênesis 3.14–24 — Expulsos do jardim, guardados pela promessa (slides).pdf", href: "", folderName: "Gênesis — O Deus por trás da história (2026)", parentFolderName: "Sermões" },
  // Sermões — João
  { id: "1taCjpJWK0elgnTZI68PczxMECKnFSwXc", title: "2025-08-31 — João 1.1–18 — Um Deus que veio a nós (guia da mensagem).pdf", href: "", folderName: "João (2025–2026)", parentFolderName: "Sermões" },
  { id: "1v-_RKa1LE2I_fZcSAUW5Dxw66kmR5Q3d", title: "2025-09-07 — João 1.19–34 — O caráter que carrega o testemunho (guia da mensagem).pdf", href: "", folderName: "João (2025–2026)", parentFolderName: "Sermões" },
  { id: "1d8NK2lZ11K1Zag_dRqyvlo05vO3yRHfa", title: "2025-09-14 — João 1.35–51 — O encontro que transforma (guia da mensagem).pdf", href: "", folderName: "João (2025–2026)", parentFolderName: "Sermões" },
  { id: "1oC0kOIkmHKccony7w2U_IiAJmYjbOj51", title: "2025-09-21 — João 2.1–12 — Uma nova realidade, Jesus é maior e melhor (guia da mensagem).pdf", href: "", folderName: "João (2025–2026)", parentFolderName: "Sermões" },
  { id: "1U2ppInjU5HCU6pX-UAr9bWjzUO-_U8bd", title: "2025-09-28 — João 2.13–25 — Nem tudo é o que parece… (guia da mensagem).pdf", href: "", folderName: "João (2025–2026)", parentFolderName: "Sermões" },
  { id: "1VeE76yZwq2d9dkOPLqPdf6ezJLSoWpBO", title: "2025-10-05 — João 3.1–21 — Nascidos para uma nova vida (guia da mensagem).pdf", href: "", folderName: "João (2025–2026)", parentFolderName: "Sermões" },
  { id: "1-CYHq35eJ3qA8wR7nsMjjIc-lTmlJNbF", title: "2025-10-12 — João 3.22–36 — Que ele cresça, e eu diminua (guia da mensagem).pdf", href: "", folderName: "João (2025–2026)", parentFolderName: "Sermões" },
  { id: "1zheT9RmlLAB70wEzCht9B2HmranbQSAF", title: "2025-10-19 — João 4.1–42 — Um Jesus surpreendente (guia da mensagem).pdf", href: "", folderName: "João (2025–2026)", parentFolderName: "Sermões" },
  { id: "1JRc0Xn-gZt3ydE4OS6_oH_Rktbveha--", title: "2025-10-26 — João 4.43–5.18 — Deus não nos dá o que buscamos, mas o que precisamos (guia da mensagem).pdf", href: "", folderName: "João (2025–2026)", parentFolderName: "Sermões" },
  { id: "1YTdi67l413OH0xYolSaKVsAee0cYnwbX", title: "2025-11-09 — João 6.1–24 — Além da multidão (guia da mensagem).pdf", href: "", folderName: "João (2025–2026)", parentFolderName: "Sermões" },
  { id: "1DgqDKnu-5uyhQ1kpwAOJPUcgb-F_8rRw", title: "2025-11-16 — João 6.25–71 — Para quem iremos? (guia da mensagem).pdf", href: "", folderName: "João (2025–2026)", parentFolderName: "Sermões" },
  { id: "1sTvAcBY6VrLAPILYwf9wL35I3C8leXU4", title: "2025-11-23 — João 7.1–52 — Não julgue um livro pela capa (guia da mensagem).pdf", href: "", folderName: "João (2025–2026)", parentFolderName: "Sermões" },
  { id: "198r5QcohEV8Z6WqvjVoz1cJUe1ilL_h-", title: "2026-01-04 — João 8.12–59 — Um livro de acordo com a capa (guia da mensagem).pdf", href: "", folderName: "João (2025–2026)", parentFolderName: "Sermões" },
  { id: "1ZJG1VE5HE6cl-9WIxyV0_-TMNN_A9zJ6", title: "2026-01-11 — João 9 — O pior cego é aquele que não quer ver (guia da mensagem).pdf", href: "", folderName: "João (2025–2026)", parentFolderName: "Sermões" },
  { id: "1oLrsxkD2OSq50lWufZreg57HQeLBSagZ", title: "2026-01-25 — João 11 — Você crê nisto? (guia da mensagem).pdf", href: "", folderName: "João (2025–2026)", parentFolderName: "Sermões" },
  { id: "18r7uUQANJqQbO1aP7jGeH27a0mmr6PEY", title: "2026-02-01 — João 12.1–26 — O paradoxo da cruz (guia da mensagem).pdf", href: "", folderName: "João (2025–2026)", parentFolderName: "Sermões" },
  { id: "1OXeAsN2JIbR8no6C8z9G0XneBkX8L_MX", title: "2026-02-08 — João 12.27–50 — Enquanto há luz (guia da mensagem).pdf", href: "", folderName: "João (2025–2026)", parentFolderName: "Sermões" },
  { id: "1aQS3QmUKlLfd3wUoDg2rUJ7jZgeYQpAt", title: "2026-02-15 — João 13 — Amou-nos até o fim (guia da mensagem).pdf", href: "", folderName: "João (2025–2026)", parentFolderName: "Sermões" },
  { id: "1mh4-gj92og1hbH76oi28lWo_W0dg5qCG", title: "2026-02-22 — João 14 — O caminho que garante a presença (guia da mensagem).pdf", href: "", folderName: "João (2025–2026)", parentFolderName: "Sermões" },
  { id: "1fvLCgk_-hncrtKdxasaJy6VuFhT_YE25", title: "2026-03-08 — João 15.18–16.33 — Coragem… eu venci! (guia da mensagem).pdf", href: "", folderName: "João (2025–2026)", parentFolderName: "Sermões" },
  { id: "1E_jqsdysbTtCEsI0L9bAu1dDasPsi2HY", title: "2026-03-15 — João 17 — A oração de Jesus por nós (guia da mensagem).pdf", href: "", folderName: "João (2025–2026)", parentFolderName: "Sermões" },
  { id: "1cbqnQKOAEyZ3ZZFRGQ8DciHz8TD166Un", title: "2026-03-29 — João 19 — A “derrota” triunfal (guia da mensagem).pdf", href: "", folderName: "João (2025–2026)", parentFolderName: "Sermões" },
  { id: "1zRGkzHl1Vbz5vWw5xLZZxAQL7nhnmP56", title: "2026-04-05 — João 20.1–18 — A quem você procura? (guia da mensagem).pdf", href: "", folderName: "João (2025–2026)", parentFolderName: "Sermões" },
  { id: "16aScCoqwlECynuSH27RrDO0xCtN5wZUG", title: "2026-04-12 — João 20.19–31 — Ele veio até nós (guia da mensagem).pdf", href: "", folderName: "João (2025–2026)", parentFolderName: "Sermões" },
  { id: "1Uyy4g8WwVLqomLlvNnosP78ZkRUjTIvi", title: "2026-04-26 — João 21.15–25 — Restaurados para sermos transformados (guia da mensagem).pdf", href: "", folderName: "João (2025–2026)", parentFolderName: "Sermões" },
  // Sermões — O que importa — Planejando 2027 (2026)
  { id: "1-1GL4lt36DO4z-i2GCmHLwiOKT2Gebsb", title: "2026-11-15 — Ageu 1–2 — Terminando bem (guia da mensagem).pdf", href: "", folderName: "O que importa — Planejando 2027 (2026)", parentFolderName: "Sermões" },
  { id: "1-NxiP5Pz47opmdYQMffKD-rQvJtiVBYg", title: "2026-11-15 — Ageu 1–2 — Terminando bem (slides).pdf", href: "", folderName: "O que importa — Planejando 2027 (2026)", parentFolderName: "Sermões" },
  // Sermões — Oração (2026)
  { id: "1jy5ph5avcr8JTqME_Xt9En-lZ5F4psvT", title: "2026-06-21 — Mateus 6.5–8 — Orações revelam corações (guia da mensagem).pdf", href: "", folderName: "Oração (2026)", parentFolderName: "Sermões" },
  { id: "1RPjCWfVw0xDLWXk99MCAerJifJAqpCph", title: "2026-06-21 — Mateus 6.5–8 — Orações revelam corações (slides).pdf", href: "", folderName: "Oração (2026)", parentFolderName: "Sermões" },
  { id: "1VbrgHt8__js-1wlLyjrnA-pUvSlVAdld", title: "2026-06-28 — Mateus 6.9–13 — Boas orações alinham corações (guia da mensagem).pdf", href: "", folderName: "Oração (2026)", parentFolderName: "Sermões" },
  { id: "1XIPpinfn1aINgs2HX6pgCf1h9zT2n2MM", title: "2026-06-28 — Mateus 6.9–13 — Boas orações alinham corações (slides).pdf", href: "", folderName: "Oração (2026)", parentFolderName: "Sermões" },
  { id: "1iQxQmKf6Mpc5FH8kQB4ZtupN-QSgxi1p", title: "2026-07-05 — Neemias 1 — Confissões preservam corações (guia da mensagem).pdf", href: "", folderName: "Oração (2026)", parentFolderName: "Sermões" },
  { id: "1zzKVMVF4ee_kdamfXYh4liBphavnHyv0", title: "2026-07-05 — Neemias 1 — Confissões preservam corações (slides).pdf", href: "", folderName: "Oração (2026)", parentFolderName: "Sermões" },
];

const FALLBACK_INDEX_CSV = `Data,Tipo,Série,Título,Texto bíblico,Pregador / professor,Temas,Vídeo,Arquivos na pasta
2025-08-31,Sermão,João,Um Deus que veio a nós,João 1.1–18,Pr. Gustavo Santos,Cristo; Encarnação; Salvação,,guia da mensagem
2025-09-07,Sermão,João,O caráter que carrega o testemunho,João 1.19–34,Pr. Gustavo Santos,Testemunho; Caráter; Cristo,,guia da mensagem
2025-09-14,Sermão,João,O encontro que transforma,João 1.35–51,Pr. Gustavo Santos,Evangelismo; Discipulado,https://www.youtube.com/watch?v=Z6hcfHxq2R8,guia da mensagem
2025-09-21,Sermão,João,Uma nova realidade: Jesus é maior e melhor,João 2.1–12,Pr. Gustavo Santos,Cristo; Obediência,https://www.youtube.com/watch?v=fHf3K24aNiE,guia da mensagem
2025-09-28,Sermão,João,Nem tudo é o que parece…,João 2.13–25,Pr. Gustavo Santos,Adoração; Fé,https://www.youtube.com/watch?v=Yxw6ghZOR4E,guia da mensagem
2025-10-05,Sermão,João,Nascidos para uma nova vida,João 3.1–21,Pr. Gustavo Santos,Novo nascimento; Salvação,https://www.youtube.com/watch?v=qVwxoRRi1OM,guia da mensagem
2025-10-12,Sermão,João,"Que ele cresça, e eu diminua",João 3.22–36,Pr. Gustavo Santos,Humildade; Cristo,https://www.youtube.com/watch?v=YfdmpSdps4M,guia da mensagem
2025-10-19,Sermão,João,Um Jesus surpreendente,João 4.1–42,Pr. Gustavo Santos,Evangelismo; Graça,https://www.youtube.com/watch?v=iXpNBuXkims,guia da mensagem
2025-10-26,Sermão,João,"Deus não nos dá o que buscamos, mas o que precisamos",João 4.43–5.18,Pr. Gustavo Santos,Fé; Obediência,https://www.youtube.com/watch?v=MncJU4gk9TA,guia da mensagem
2025-11-09,Sermão,João,Além da multidão,João 6.1–24,Pr. Gustavo Santos,Discipulado; Obediência,https://www.youtube.com/watch?v=qGe4_KdboMI,guia da mensagem
2025-11-16,Sermão,João,Para quem iremos?,João 6.25–71,Pr. Gustavo Santos,Salvação; Soberania de Deus,https://www.youtube.com/watch?v=dKEjV6J1itU,guia da mensagem
2025-11-23,Sermão,João,Não julgue um livro pela capa,João 7.1–52,Pr. Gustavo Santos,Fé; Espírito Santo,https://www.youtube.com/watch?v=pFcrSLcrn_g,guia da mensagem
2026-01-04,Sermão,João,Um livro de acordo com a capa,João 8.12–59,Pr. Gustavo Santos,Identidade em Cristo; Liberdade,https://www.youtube.com/watch?v=LOQbsskcrNM,guia da mensagem
2026-01-11,Sermão,João,O pior cego é aquele que não quer ver,João 9,Pr. Gustavo Santos,Sofrimento; Testemunho,https://www.youtube.com/watch?v=rpC1t_NbbtE,guia da mensagem
2026-01-25,Sermão,João,Você crê nisto?,João 11,Pr. Gustavo Santos,Sofrimento; Ressurreição; Fé,https://www.youtube.com/watch?v=aQQNvY1ZbYU,guia da mensagem
2026-02-01,Sermão,João,O paradoxo da cruz,João 12.1–26,Pr. Gustavo Santos,Cruz; Discipulado,https://www.youtube.com/watch?v=kNgTcT6H9VY,guia da mensagem
2026-02-08,Sermão,João,Enquanto há luz,João 12.27–50,Pr. Gustavo Santos,Fé; Temor a homens,https://www.youtube.com/watch?v=5BH_MaP6TKc,guia da mensagem
2026-02-15,Sermão,João,Amou-nos até o fim,João 13,Pr. Gustavo Santos,Amor; Serviço; Igreja,https://www.youtube.com/watch?v=uQey4fTiNws,guia da mensagem
2026-02-22,Sermão,João,O caminho que garante a presença,João 14,Pr. Gustavo Santos,Espírito Santo; Oração; Ansiedade,https://www.youtube.com/watch?v=vJDkFjUBu9g,guia da mensagem
2026-03-08,Sermão,João,Coragem… eu venci!,João 15.18–16.33,Pr. Gustavo Santos,Perseguição; Esperança; Espírito Santo,https://www.youtube.com/watch?v=R6rx9oeYPtk,guia da mensagem
2026-03-15,Sermão,João,A oração de Jesus por nós,João 17,Pr. Gustavo Santos,Oração; Santificação; Unidade,https://www.youtube.com/watch?v=AamL-rrhz6A,guia da mensagem
2026-03-29,Sermão,João,"A ""derrota"" triunfal",João 19,Pr. Gustavo Santos,Cruz; Páscoa,https://www.youtube.com/watch?v=9goTv9H1Ctw,guia da mensagem
2026-04-05,Sermão,João,A quem você procura?,João 20.1–18,Pr. Gustavo Santos,Ressurreição; Páscoa; Esperança,https://www.youtube.com/watch?v=oB1dQIUy3lg,guia da mensagem
2026-04-12,Aula (EBD),"EBD · Família, comunidade e o evangelho",O casamento no plano de Deus,Gênesis 1.27–28; 2.18–25 · Efésios 5.22–33,Pr. Gustavo Santos,Casamento; Família,,material do aluno + slides
2026-04-12,Sermão,João,Ele veio até nós,João 20.19–31,Pr. Gustavo Santos,Ressurreição; Missão; Dúvida,https://www.youtube.com/watch?v=02xVlT-YpPE,guia da mensagem
2026-04-26,Sermão,João,Restaurados para sermos transformados,João 21.15–25,Pr. Gustavo Santos,Restauração; Perdão; Discipulado,https://www.youtube.com/watch?v=BuvA7x-SL7A,guia da mensagem
2026-05-17,Sermão,Gênesis · O Deus por trás da história,O Deus por trás da história,Gênesis 1.1–2.3,Pr. Gustavo Santos,Criação; Deus; Descanso,https://www.youtube.com/watch?v=Sx41UKfn-PY,guia da mensagem + slides
2026-05-24,Sermão,Gênesis · O Deus por trás da história,Formados por Deus,Gênesis 2.4–17,Pr. Gustavo Santos,Identidade; Criação; Obediência,https://www.youtube.com/watch?v=4Y-BGNKkknQ,guia da mensagem + slides
2026-05-31,Sermão,Gênesis · O Deus por trás da história,Uma só carne,Gênesis 2.18–25,Pr. Gustavo Santos,Casamento; Família,https://www.youtube.com/watch?v=4nX3Tl_3xWA,guia da mensagem + slides
2026-06-07,Sermão,Gênesis · O Deus por trás da história,Quando a mentira parece boa,Gênesis 3.1–13,Pr. Gustavo Santos,Pecado; Tentação,https://www.youtube.com/watch?v=G4UKLvzmJu8,guia da mensagem + slides
2026-06-14,Sermão,Gênesis · O Deus por trás da história,"Expulsos do jardim, guardados pela promessa",Gênesis 3.14–24,Pr. Gustavo Santos,Pecado; Promessa; Esperança,https://www.youtube.com/watch?v=wsYx68_4dhA,guia da mensagem + slides
2026-06-21,Sermão,Oração,Orações revelam corações,Mateus 6.5–8,Pr. Gustavo Santos,Oração,https://www.youtube.com/watch?v=c6t5NmYrRQs,guia da mensagem + slides
2026-06-28,Sermão,Oração,Boas orações alinham corações,Mateus 6.9–13,Pr. Gustavo Santos,Oração; Reino de Deus,https://www.youtube.com/watch?v=2ZnHuxVvaNs,guia da mensagem + slides
2026-07-05,Sermão,Oração,Confissões preservam corações,Neemias 1,Pr. Gustavo Santos,Oração; Confissão; Arrependimento,https://www.youtube.com/watch?v=jPu2G4ncZlw,guia da mensagem + slides
2026-07-12,Aula (EBD),EBD · Discipulado · Aula 1,Características de um discípulo,Marcos 1.17 · João 13 e 15,Pr. Gustavo Santos,Discipulado,,material do aluno + slides
2026-07-19,Aula (EBD),EBD · Discipulado · Aula 2,Fazendo discípulos,Mateus 28.19–20 · Efésios 4.11–16 · 2 Timóteo 2.2,Pr. Gustavo Santos,Discipulado; Missão,,material do aluno + slides
2026-07-19,Sermão,Efésios · Em Cristo,Olhos para ver a Cristo,Efésios 1.15–23,Pr. Gustavo Santos,Oração; Conhecimento de Cristo,https://www.youtube.com/watch?v=LCHsWtQbZCg,guia da mensagem + slides
2026-08-02,Aula (EBD),EBD · Aconselhamento Bíblico · Aula 1,O evangelho e as dinâmicas do coração,Mateus 6.19–34,Pr. Gustavo Santos,Aconselhamento; Ansiedade; Mudança bíblica,,material do aluno + slides
2026-08-02,Sermão,Efésios · Em Cristo,Uma nova identidade em Cristo,Efésios 2.1–10,Pr. Gustavo Santos,Salvação; Graça; Boas obras,https://www.youtube.com/watch?v=oRX2jMpfBsg,guia da mensagem + slides
2026-08-09,Aula (EBD),EBD · Aconselhamento Bíblico · Aula 2,Temor a homens,Provérbios 29.25 · Gálatas 1.10,Pr. Gustavo Santos,Aconselhamento; Temor a homens,,material do aluno + slides
2026-08-09,Sermão,Efésios · Em Cristo,Uma nova comunidade em Cristo,Efésios 2.11–22,Pr. Gustavo Santos,Igreja; Reconciliação; Unidade,https://www.youtube.com/watch?v=OABr7AeeFgo,guia da mensagem + slides
2026-08-16,Aula (EBD),EBD · Aconselhamento Bíblico · Aula 3,Ira e amargura,Efésios 4.26–32,Pr. Gustavo Santos,Aconselhamento; Ira; Perdão,,material do aluno + slides
2026-08-16,Sermão,Efésios · Em Cristo,O mosaico da graça de Deus,Efésios 3.1–13,Pr. Gustavo Santos,Igreja; Missão; Graça,https://www.youtube.com/watch?v=kruNE-XQ_bs,guia da mensagem + slides
2026-09-06,Aula (EBD),EBD · Aconselhamento Bíblico · Aula 4,Vocês não são de si mesmos,1 Coríntios 6.12–20,Pr. Gustavo Santos,Aconselhamento; Pureza sexual,,material do aluno + slides
2026-09-06,Sermão,Efésios · Em Cristo,Uma igreja saudável é marcada pela unidade espiritual,Efésios 4.1–6,Pr. Gustavo Santos,Igreja; Unidade,https://www.youtube.com/watch?v=lGUnAn4fYaw,guia da mensagem + slides
2026-09-13,Aula (EBD),EBD · Aconselhamento Bíblico · Descontentamento I,Contentamento se aprende,Filipenses 4.11–13,Pr. Gustavo Santos,Aconselhamento; Contentamento,,material do aluno + slides
2026-09-13,Sermão,Efésios · Em Cristo,Uma igreja saudável é marcada por diversidade e por maturidade,Efésios 4.7–16,Pr. Gustavo Santos,Igreja; Dons; Maturidade,https://www.youtube.com/watch?v=e2gRXQzIGao,guia da mensagem + slides
2026-09-20,Aula (EBD),EBD · Aconselhamento Bíblico · Descontentamento II,O que Deus prometeu — e o que ele não prometeu,Hebreus 13.5–6,Pr. Gustavo Santos,Aconselhamento; Contentamento; Dinheiro,,material do aluno + slides
2026-09-27,Aula (EBD),EBD · O cristão e a política,O Rei perfeito não está na urna,Provérbios 21.1,Pr. Gustavo Santos,Política; Cidadania,,material do aluno + slides
2026-09-27,Sermão,Efésios · Em Cristo,Uma vida coerente,Efésios 4.25–5.5,Pr. Gustavo Santos,Santificação; Perdão; Palavras,https://www.youtube.com/watch?v=MlJh6t7LnRk,guia da mensagem + slides
2026-10-04,Aula (EBD),EBD · Aconselhamento Bíblico · Inveja I,O que é a inveja — e o que ela custa,Mateus 20.1–16 · Romanos 12.15,Pr. Gustavo Santos,Aconselhamento; Inveja,,material do aluno + slides
2026-10-11,Aula (EBD),EBD · Aconselhamento Bíblico · Inveja II,"Avaliar, amar, alegrar, agradecer",Romanos 12.15 · Filipenses 2.3–4,Pr. Gustavo Santos,Aconselhamento; Inveja; Gratidão,,material do aluno + slides
2026-10-18,Aula (EBD),EBD · Família · O homem no casamento,O homem que a igreja forma,1 Pedro 3.7 · Tito 2,Pr. Gustavo Santos,Casamento; Masculinidade; Família,,material do aluno + slides
2026-10-18,Sermão,Efésios · Em Cristo,O casamento cheio do Espírito,Efésios 5.21–33,Pr. Gustavo Santos,Casamento; Família,https://www.youtube.com/watch?v=odVP7uJFm-w,guia da mensagem + slides
2026-11-01,Aula (EBD),EBD · Família,Pais e filhos — pastoreando o coração,Efésios 6.1–4,Pr. Gustavo Santos,Família; Criação de filhos; Disciplina,,material do aluno + slides
2026-11-01,Sermão,Efésios · Em Cristo,Para quem você trabalha?,Efésios 6.5–9,Pr. Gustavo Santos,Trabalho; Vocação,https://www.youtube.com/watch?v=eSA1qB6qBnk,guia da mensagem + slides
2026-11-08,Aula (EBD),EBD · Finanças para a glória de Deus,Onde está o seu tesouro,Mateus 6.19–24,Pr. Gustavo Santos,Finanças; Mordomia; Generosidade,,material do aluno + slides + planilha de orçamento
2026-11-08,Sermão,Efésios · Em Cristo,Vestindo-se para a guerra,Efésios 6.10–24,Pr. Gustavo Santos,Batalha espiritual; Oração,https://www.youtube.com/watch?v=9bF8dFlr1E4,guia da mensagem + slides
2026-11-15,Aula (EBD),EBD · Finanças para a glória de Deus,Parceiros no evangelho,2 Coríntios 8–9 · 1 Coríntios 9.1–14 · 1 Timóteo 5.17–18,Pr. Gustavo Santos,Finanças; Generosidade; Sustento pastoral,,material do aluno + slides
2026-11-15,Sermão,O que importa · Planejando 2027,Terminando bem,Ageu 1–2,Pr. Gustavo Santos,Prioridades; Perseverança; Planejamento,https://www.youtube.com/watch?v=3VFtiuYTT0U,guia da mensagem + slides`;

export async function getResourceLibrary(): Promise<ResourceItem[]> {
  try {
    const { files: liveFiles, indexSheetId } = await crawlDriveFolderTree(ROOT_FOLDER_ID);

    let indexCsv = FALLBACK_INDEX_CSV;
    try {
      const sheetRes = await fetch(
        `https://docs.google.com/spreadsheets/d/${indexSheetId}/export?format=csv&gid=973612218`,
        { next: { revalidate: 300 } }
      );
      if (sheetRes.ok) {
        const text = await sheetRes.text();
        if (text && text.includes("Título")) {
          indexCsv = text;
        }
      }
    } catch {
      // Fallback to snapshot CSV if Google Sheets export temporarily fails
    }

    const rawToUse = liveFiles.length > 0 ? liveFiles : FALLBACK_RAW_FILES;
    const rows = parseIndexCsv(indexCsv);
    return mergeDriveAndIndex(rawToUse, rows);
  } catch {
    const rows = parseIndexCsv(FALLBACK_INDEX_CSV);
    return mergeDriveAndIndex(FALLBACK_RAW_FILES, rows);
  }
}
