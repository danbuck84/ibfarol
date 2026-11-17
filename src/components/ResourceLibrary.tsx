"use client";

import { useState, useMemo, useEffect } from "react";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import type { ResourceItem, ResourceFile } from "@/lib/resourceLibrary";
import { CANONICAL_BIBLE_BOOKS } from "@/lib/resourceLibrary";

const BIBLE_BOOK_EN: Record<string, string> = {
  "Gênesis": "Genesis", "Êxodo": "Exodus", "Levítico": "Leviticus", "Números": "Numbers", "Deuteronômio": "Deuteronomy",
  "Josué": "Joshua", "Juízes": "Judges", "Rute": "Ruth", "1 Samuel": "1 Samuel", "2 Samuel": "2 Samuel",
  "1 Reis": "1 Kings", "2 Reis": "2 Kings", "1 Crônicas": "1 Chronicles", "2 Crônicas": "2 Chronicles",
  "Esdras": "Ezra", "Neemias": "Nehemiah", "Ester": "Esther", "Jó": "Job", "Salmos": "Psalms", "Provérbios": "Proverbs",
  "Eclesiastes": "Ecclesiastes", "Cantares": "Song of Solomon", "Isaías": "Isaiah", "Jeremias": "Jeremiah",
  "Lamentações": "Lamentations", "Ezequiel": "Ezekiel", "Daniel": "Daniel", "Oseias": "Hosea", "Joel": "Joel",
  "Amós": "Amos", "Obadias": "Obadiah", "Jonas": "Jonah", "Miqueias": "Micah", "Naum": "Nahum",
  "Habacuque": "Habakkuk", "Sofonias": "Zephaniah", "Ageu": "Haggai", "Zacarias": "Zechariah", "Malaquias": "Malachi",
  "Mateus": "Matthew", "Marcos": "Mark", "Lucas": "Luke", "João": "John", "Atos": "Acts", "Romanos": "Romans",
  "1 Coríntios": "1 Corinthians", "2 Coríntios": "2 Corinthians", "Gálatas": "Galatians", "Efésios": "Ephesians",
  "Filipenses": "Philippians", "Colossenses": "Colossians", "1 Tessalonicenses": "1 Thessalonians",
  "2 Tessalonicenses": "2 Thessalonians", "1 Timóteo": "1 Timothy", "2 Timóteo": "2 Timothy", "Tito": "Titus",
  "Filemom": "Philemon", "Hebreus": "Hebrews", "Tiago": "James", "1 Pedro": "1 Peter", "2 Pedro": "2 Peter",
  "1 João": "1 John", "2 João": "2 John", "3 João": "3 John", "Judas": "Jude", "Apocalipse": "Revelation",
};

const UI_TEXT = {
  "pt-BR": {
    eyebrow: "BIBLIOTECA DE RECURSOS",
    headline: "Explore os Estudos e Materiais",
    subtitle: "Busque por sermões, apostilas da EBD, slides e documentos por tema, série ou passagem bíblica — tudo direto aqui no site.",
    searchPlaceholder: "Buscar por título, passagem bíblica, tema ou série...",
    searchBtn: "Buscar",
    tabAll: "Todos",
    tabSermons: "Sermões",
    tabEbd: "Aulas (EBD)",
    tabDocs: "Documentos",
    filterTopic: "Todos os Temas",
    filterSeries: "Todas as Séries",
    filterBook: "Todos os Livros da Bíblia",
    labelTopic: "Temas",
    labelSeries: "Séries",
    labelBook: "Passagem Bíblica",
    clearFilters: "Limpar filtros",
    showing: "Mostrando",
    of: "de",
    results: "materiais",
    noResultsTitle: "Nenhum material encontrado",
    noResultsDesc: "Tente ajustar os filtros ou buscar por outro termo.",
    badgeSermon: "Sermão",
    badgeEbd: "Aula EBD",
    badgeDoc: "Documento",
    badgeLatestEbd: "Aula Mais Recente",
    watchVideo: "Vídeo da Mensagem",
    downloadBtn: "Baixar Arquivo",
    closeBtn: "Fechar",
    readOnline: "Visualizar no site",
    loadMore: "Ver mais materiais",
    qrBtn: "QR Code da EBD",
    qrModalTitle: "Material da EBD no Celular",
    qrModalDesc: "Aponte a câmera do celular para acessar as apostilas e slides da Escola Bíblica Dominical.",
    qrDownloadBtn: "Baixar QR Code (PNG)",
  },
  en: {
    eyebrow: "RESOURCE LIBRARY",
    headline: "Explore Studies & Materials",
    subtitle: "Search sermons, Sunday School (EBD) handouts, slides, and church documents by topic, series, or Scripture passage — right here on the site.",
    searchPlaceholder: "Search by title, Bible passage, topic, or series...",
    searchBtn: "Search",
    tabAll: "All",
    tabSermons: "Sermons",
    tabEbd: "Sunday School (EBD)",
    tabDocs: "Documents",
    filterTopic: "All Topics",
    filterSeries: "All Series",
    filterBook: "All Bible Books",
    labelTopic: "Topics",
    labelSeries: "Series",
    labelBook: "Scripture",
    clearFilters: "Clear filters",
    showing: "Showing",
    of: "of",
    results: "resources",
    noResultsTitle: "No resources found",
    noResultsDesc: "Try adjusting your filters or searching for another term.",
    badgeSermon: "Sermon",
    badgeEbd: "EBD Lesson",
    badgeDoc: "Document",
    badgeLatestEbd: "Latest Lesson",
    watchVideo: "Message Video",
    downloadBtn: "Download File",
    closeBtn: "Close",
    readOnline: "Read on site",
    loadMore: "Load more resources",
    qrBtn: "EBD QR Code",
    qrModalTitle: "EBD Materials on Your Phone",
    qrModalDesc: "Point your phone camera here to open Sunday School handouts and slides.",
    qrDownloadBtn: "Download QR Code (PNG)",
  },
};

function normalizeSearch(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function formatDate(dateStr: string, locale: string): string {
  if (!dateStr) return "";
  const [y, m, d] = dateStr.split("-").map(Number);
  if (!y || !m || !d) return dateStr;
  const date = new Date(y, m - 1, d, 12, 0, 0);
  return new Intl.DateTimeFormat(locale === "en" ? "en-US" : "pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

type ActiveModalState = {
  item: ResourceItem;
  mode: "file" | "video";
  activeFileId?: string;
} | null;

export default function ResourceLibrary({
  items,
  initialType,
}: {
  items: ResourceItem[];
  initialType?: "all" | "sermon" | "ebd" | "document";
}) {
  const locale = useLocale();
  const searchParams = useSearchParams();
  const t = locale === "en" ? UI_TEXT.en : UI_TEXT["pt-BR"];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<"all" | "sermon" | "ebd" | "document">(
    initialType || "all"
  );
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [selectedSeries, setSelectedSeries] = useState<string>("");
  const [selectedBook, setSelectedBook] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState(12);
  const [modalState, setModalState] = useState<ActiveModalState>(null);
  const [showQrModal, setShowQrModal] = useState(false);

  // Sync with URL query parameters (e.g. ?tipo=ebd or ?q=...)
  useEffect(() => {
    const tipoParam = searchParams.get("tipo") || searchParams.get("type");
    if (tipoParam === "ebd") setSelectedType("ebd");
    else if (tipoParam === "sermao" || tipoParam === "sermon") setSelectedType("sermon");
    else if (tipoParam === "doc" || tipoParam === "document") setSelectedType("document");

    const qParam = searchParams.get("q");
    if (qParam) setSearchQuery(qParam);
  }, [searchParams]);

  // Close modal on Escape key
  useEffect(() => {
    if (!modalState) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalState(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [modalState]);

  // Compute available filter options dynamically
  const { allTopics, allSeries, allBooks } = useMemo(() => {
    const topicsSet = new Set<string>();
    const seriesSet = new Set<string>();
    const booksSet = new Set<string>();

    const pool =
      selectedType === "all"
        ? items
        : items.filter((item) => item.type === selectedType);

    for (const item of pool) {
      for (const th of item.themes) topicsSet.add(th);
      if (item.series) seriesSet.add(item.series);
      for (const b of item.bibleBooks) booksSet.add(b);
    }

    const sortedTopics = Array.from(topicsSet).sort((a, b) => a.localeCompare(b, "pt-BR"));
    const sortedSeries = Array.from(seriesSet).sort((a, b) => a.localeCompare(b, "pt-BR"));
    const sortedBooks = Array.from(booksSet).sort(
      (a, b) => CANONICAL_BIBLE_BOOKS.indexOf(a) - CANONICAL_BIBLE_BOOKS.indexOf(b)
    );

    return {
      allTopics: sortedTopics,
      allSeries: sortedSeries,
      allBooks: sortedBooks,
    };
  }, [items, selectedType]);

  // Filter items
  const filteredItems = useMemo(() => {
    const q = normalizeSearch(searchQuery.trim());

    return items.filter((item) => {
      if (selectedType !== "all" && item.type !== selectedType) return false;
      if (selectedTopic && !item.themes.includes(selectedTopic)) return false;
      if (selectedSeries && item.series !== selectedSeries) return false;
      if (selectedBook && !item.bibleBooks.includes(selectedBook)) return false;

      if (q) {
        const haystack = normalizeSearch(
          [
            item.title,
            item.series,
            item.scripture,
            item.themes.join(" "),
            item.bibleBooks.join(" "),
          ].join(" ")
        );
        if (!haystack.includes(q)) return false;
      }

      return true;
    });
  }, [items, selectedType, selectedTopic, selectedSeries, selectedBook, searchQuery]);

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(12);
  }, [selectedType, selectedTopic, selectedSeries, selectedBook, searchQuery]);

  const hasActiveFilters =
    selectedType !== "all" ||
    Boolean(selectedTopic) ||
    Boolean(selectedSeries) ||
    Boolean(selectedBook) ||
    Boolean(searchQuery.trim());

  const clearAllFilters = () => {
    setSelectedType("all");
    setSelectedTopic("");
    setSelectedSeries("");
    setSelectedBook("");
    setSearchQuery("");
  };

  // Identify the latest EBD lesson ID for highlighting
  const latestEbdId = useMemo(() => {
    const firstEbd = items.find((i) => i.type === "ebd");
    return firstEbd?.id;
  }, [items]);

  const visibleItems = filteredItems.slice(0, visibleCount);

  const activeModalFile: ResourceFile | undefined = useMemo(() => {
    if (!modalState || modalState.mode !== "file") return undefined;
    return (
      modalState.item.files.find((f) => f.id === modalState.activeFileId) ||
      modalState.item.files[0]
    );
  }, [modalState]);

  return (
    <section id="biblioteca" className="py-12 md:py-16 px-6 md:px-8 max-w-[1280px] mx-auto">
      {/* Search & Filter Panel */}
      <div className="bg-white border border-brand-hairline rounded-2xl p-6 md:p-10 shadow-sm mb-10">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <p className="text-xs md:text-sm font-semibold tracking-[2.5px] uppercase text-brand-primary-ink mb-2">
            {t.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink tracking-tight mb-3">
            {t.headline}
          </h2>
          <p className="text-brand-body text-sm md:text-base">{t.subtitle}</p>
        </div>

        {/* Search Input Bar */}
        <div className="max-w-3xl mx-auto mb-6">
          <div className="relative flex items-center">
            <svg
              className="w-5 h-5 text-brand-mute absolute left-4 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-12 pr-28 py-3.5 md:py-4 bg-brand-canvas border border-brand-hairline rounded-xl text-brand-ink placeholder:text-brand-mute focus:outline-none focus:border-brand-primary-ink transition-colors text-sm md:text-base"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-24 text-brand-mute hover:text-brand-ink p-1 cursor-pointer"
              >
                ✕
              </button>
            )}
            <button
              type="button"
              onClick={() => {}}
              className="absolute right-2 bg-brand-ink hover:bg-brand-body text-white font-semibold px-4 md:px-5 py-2 md:py-2.5 rounded-lg text-sm transition-colors cursor-pointer"
            >
              {t.searchBtn}
            </button>
          </div>
        </div>

        {/* Category Pills (Todos / Sermões / Aulas EBD / Documentos) */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {(
            [
              { key: "all", label: t.tabAll, count: items.length },
              {
                key: "sermon",
                label: t.tabSermons,
                count: items.filter((i) => i.type === "sermon").length,
              },
              {
                key: "ebd",
                label: t.tabEbd,
                count: items.filter((i) => i.type === "ebd").length,
              },
              {
                key: "document",
                label: t.tabDocs,
                count: items.filter((i) => i.type === "document").length,
              },
            ] as const
          ).map((tab) => {
            const active = selectedType === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setSelectedType(tab.key)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  active
                    ? "bg-brand-primary text-brand-ink shadow-xs"
                    : "bg-brand-canvas-soft text-brand-body hover:bg-brand-hairline/60"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                    active ? "bg-brand-ink/15 text-brand-ink" : "bg-white/80 text-brand-mute"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3 Filter Dropdowns: TOPICS | SERIES | SCRIPTURE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {/* Topics */}
          <div className="relative">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-brand-mute mb-1.5 px-1">
              {t.labelTopic}
            </label>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-brand-canvas border border-brand-hairline rounded-lg text-sm font-medium text-brand-ink focus:outline-none focus:border-brand-primary-ink cursor-pointer"
            >
              <option value="">{t.filterTopic}</option>
              {allTopics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>

          {/* Series */}
          <div className="relative">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-brand-mute mb-1.5 px-1">
              {t.labelSeries}
            </label>
            <select
              value={selectedSeries}
              onChange={(e) => setSelectedSeries(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-brand-canvas border border-brand-hairline rounded-lg text-sm font-medium text-brand-ink focus:outline-none focus:border-brand-primary-ink cursor-pointer"
            >
              <option value="">{t.filterSeries}</option>
              {allSeries.map((series) => (
                <option key={series} value={series}>
                  {series}
                </option>
              ))}
            </select>
          </div>

          {/* Scripture / Bible Book */}
          <div className="relative">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-brand-mute mb-1.5 px-1">
              {t.labelBook}
            </label>
            <select
              value={selectedBook}
              onChange={(e) => setSelectedBook(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-brand-canvas border border-brand-hairline rounded-lg text-sm font-medium text-brand-ink focus:outline-none focus:border-brand-primary-ink cursor-pointer"
            >
              <option value="">{t.filterBook}</option>
              {allBooks.map((book) => (
                <option key={book} value={book}>
                  {locale === "en" ? BIBLE_BOOK_EN[book] || book : book}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Status Bar & Clear Filters */}
        <div className="max-w-4xl mx-auto mt-5 pt-4 border-t border-brand-hairline/60 flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm text-brand-mute">
          <span>
            {t.showing} <strong className="text-brand-ink">{filteredItems.length}</strong> {t.of}{" "}
            {items.length} {t.results}
          </span>
          <div className="flex items-center gap-4">
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearAllFilters}
                className="text-brand-primary-ink hover:underline font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span>✕</span> {t.clearFilters}
              </button>
            )}
            <button
              type="button"
              onClick={() => setShowQrModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-canvas-soft hover:bg-brand-hairline text-brand-ink font-semibold text-xs transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 text-brand-primary-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 3h3m3 0h-3m0 0v-3m0 3v3" />
              </svg>
              <span>{t.qrBtn}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      {filteredItems.length === 0 ? (
        <div className="bg-brand-canvas-soft border border-brand-hairline rounded-xl p-12 text-center">
          <p className="text-xl font-bold text-brand-ink mb-2">{t.noResultsTitle}</p>
          <p className="text-brand-body mb-6">{t.noResultsDesc}</p>
          <button
            type="button"
            onClick={clearAllFilters}
            className="bg-brand-primary text-brand-ink font-bold px-6 py-2.5 rounded-lg text-sm hover:bg-brand-primary-deep transition-colors cursor-pointer"
          >
            {t.clearFilters}
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleItems.map((item) => {
              const isLatestEbd = item.id === latestEbdId && selectedType === "ebd";
              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-xl border transition-all flex flex-col justify-between p-6 shadow-xs hover:shadow-md ${
                    isLatestEbd
                      ? "border-2 border-brand-primary ring-4 ring-brand-primary/15"
                      : "border-brand-hairline"
                  }`}
                >
                  <div>
                    {/* Top row: Type Badge + Date */}
                    <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                            item.type === "ebd"
                              ? "bg-amber-100 text-amber-900"
                              : item.type === "sermon"
                              ? "bg-brand-canvas-soft text-brand-ink"
                              : "bg-stone-200 text-stone-800"
                          }`}
                        >
                          {item.type === "ebd"
                            ? t.badgeEbd
                            : item.type === "sermon"
                            ? t.badgeSermon
                            : t.badgeDoc}
                        </span>
                        {isLatestEbd && (
                          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-brand-primary text-brand-ink">
                            ★ {t.badgeLatestEbd}
                          </span>
                        )}
                      </div>
                      {item.date && (
                        <span className="text-xs text-brand-mute font-medium">
                          {formatDate(item.date, locale)}
                        </span>
                      )}
                    </div>

                    {/* Series */}
                    {item.series && (
                      <button
                        type="button"
                        onClick={() => setSelectedSeries(item.series)}
                        className="text-xs font-semibold text-brand-primary-ink hover:underline text-left mb-1 block cursor-pointer"
                      >
                        {item.series}
                      </button>
                    )}

                    {/* Title */}
                    <h3 className="text-lg font-bold text-brand-ink leading-snug mb-2">
                      {item.title}
                    </h3>

                    {/* Scripture reference */}
                    {item.scripture && (
                      <p className="text-xs md:text-sm font-medium text-brand-body flex items-center gap-1.5 mb-3">
                        <span className="text-brand-primary-ink">📖</span>
                        <span>{item.scripture}</span>
                      </p>
                    )}

                    {/* Themes */}
                    {item.themes.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {item.themes.map((th) => (
                          <button
                            key={th}
                            type="button"
                            onClick={() => setSelectedTopic(th)}
                            className="text-[11px] bg-brand-canvas hover:bg-brand-canvas-soft text-brand-body border border-brand-hairline/80 px-2 py-0.5 rounded-full transition-colors cursor-pointer"
                          >
                            #{th}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Action Buttons (Read inside site / Slides / Video) */}
                  <div className="pt-4 border-t border-brand-hairline/60 flex flex-wrap gap-2">
                    {item.files.map((file) => {
                      const isPrimary =
                        file.role === "guide" ||
                        file.role === "student" ||
                        file.role === "document";
                      const label = locale === "en" ? file.labelEn : file.labelPt;

                      if (!file.isPdf) {
                        return (
                          <a
                            key={file.id}
                            href={file.downloadUrl}
                            className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold bg-brand-canvas-soft hover:bg-brand-hairline text-brand-ink transition-colors text-center"
                          >
                            <span>📊</span>
                            <span>{label}</span>
                          </a>
                        );
                      }

                      return (
                        <button
                          key={file.id}
                          type="button"
                          onClick={() =>
                            setModalState({
                              item,
                              mode: "file",
                              activeFileId: file.id,
                            })
                          }
                          className={`flex-1 min-w-[130px] inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                            isPrimary
                              ? "bg-brand-primary hover:bg-brand-primary-deep text-brand-ink"
                              : "bg-brand-canvas-soft hover:bg-brand-hairline text-brand-ink"
                          }`}
                        >
                          <span>{file.role === "slides" ? "🖥️" : "📄"}</span>
                          <span>{label}</span>
                        </button>
                      );
                    })}

                    {item.youtubeId && (
                      <button
                        type="button"
                        onClick={() =>
                          setModalState({
                            item,
                            mode: "video",
                          })
                        }
                        className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-bold bg-brand-ink hover:bg-brand-body text-white transition-colors cursor-pointer"
                      >
                        <span>▶️</span>
                        <span>{t.watchVideo}</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredItems.length && (
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 12)}
                className="bg-white hover:bg-brand-canvas-soft text-brand-ink font-bold px-8 py-3.5 rounded-xl border border-brand-hairline shadow-xs transition-colors cursor-pointer text-sm"
              >
                {t.loadMore} ({filteredItems.length - visibleCount})
              </button>
            </div>
          )}
        </>
      )}

      {/* In-Site Document & Video Reader Modal */}
      {modalState && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 md:p-6"
          onClick={() => setModalState(null)}
        >
          <div
            className="bg-white w-full max-w-5xl h-[90vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl border border-brand-hairline"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-4 md:px-6 py-4 bg-brand-canvas border-b border-brand-hairline flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-brand-primary-ink uppercase tracking-wider">
                  {modalState.item.series}
                  {modalState.item.scripture ? ` · ${modalState.item.scripture}` : ""}
                </p>
                <h3 className="text-base md:text-lg font-bold text-brand-ink leading-snug">
                  {modalState.item.title}
                </h3>
              </div>

              {/* Switcher Tabs inside Modal (Guide / Slides / Video) + Download + Close */}
              <div className="flex flex-wrap items-center gap-2">
                {modalState.item.files
                  .filter((f) => f.isPdf)
                  .map((file) => {
                    const isCurrent =
                      modalState.mode === "file" && activeModalFile?.id === file.id;
                    const label = locale === "en" ? file.labelEn : file.labelPt;
                    return (
                      <button
                        key={file.id}
                        type="button"
                        onClick={() =>
                          setModalState({
                            item: modalState.item,
                            mode: "file",
                            activeFileId: file.id,
                          })
                        }
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                          isCurrent
                            ? "bg-brand-primary text-brand-ink"
                            : "bg-white border border-brand-hairline text-brand-body hover:text-brand-ink"
                        }`}
                      >
                        {file.role === "slides" ? "🖥️ " : "📄 "}
                        {label}
                      </button>
                    );
                  })}

                {modalState.item.youtubeId && (
                  <button
                    type="button"
                    onClick={() =>
                      setModalState({
                        item: modalState.item,
                        mode: "video",
                      })
                    }
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      modalState.mode === "video"
                        ? "bg-brand-primary text-brand-ink"
                        : "bg-white border border-brand-hairline text-brand-body hover:text-brand-ink"
                    }`}
                  >
                    ▶️ {t.watchVideo}
                  </button>
                )}

                {modalState.mode === "file" && activeModalFile && (
                  <a
                    href={activeModalFile.downloadUrl}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold bg-brand-ink hover:bg-brand-body text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>⬇</span>
                    <span>{t.downloadBtn}</span>
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => setModalState(null)}
                  className="ml-auto md:ml-2 px-3 py-1.5 rounded-lg text-xs font-bold bg-stone-200 hover:bg-stone-300 text-brand-ink transition-colors cursor-pointer"
                >
                  ✕ {t.closeBtn}
                </button>
              </div>
            </div>

            {/* Modal Viewer Body */}
            <div className="flex-1 bg-stone-900 relative">
              {modalState.mode === "video" && modalState.item.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${modalState.item.youtubeId}?autoplay=1`}
                  title={modalState.item.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : activeModalFile ? (
                <iframe
                  key={activeModalFile.id}
                  src={activeModalFile.previewUrl}
                  title={activeModalFile.name}
                  className="w-full h-full border-0 bg-white"
                  allow="autoplay"
                />
              ) : null}
            </div>
          </div>
        </div>
      )}

      {/* EBD QR Code Projector & Download Modal */}
      {showQrModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setShowQrModal(false)}
        >
          <div
            className="bg-[#1A1714] text-white w-full max-w-md rounded-2xl p-8 text-center shadow-2xl border border-brand-primary/30 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white text-sm font-bold px-2.5 py-1 rounded-md bg-white/10 cursor-pointer"
            >
              ✕
            </button>
            <p className="text-xs font-bold tracking-[2.5px] uppercase text-brand-primary mb-2">
              IGREJA BATISTA FAROL
            </p>
            <h3 className="text-2xl font-bold mb-2">{t.qrModalTitle}</h3>
            <p className="text-sm text-white/75 mb-6">{t.qrModalDesc}</p>

            <div className="bg-white p-4 rounded-2xl inline-block shadow-lg mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/qrcode-ebd.png"
                alt="QR Code EBD Igreja Batista Farol"
                className="w-64 h-64 md:w-72 md:h-72 object-contain mx-auto"
              />
            </div>

            <p className="text-sm font-mono text-brand-primary font-semibold mb-6">
              batistafarol.org/ebd
            </p>

            <div className="flex justify-center gap-3">
              <a
                href="/qrcode-ebd.png"
                download="QRCode-EBD-IBFarol.png"
                className="bg-brand-primary hover:bg-brand-primary-deep text-brand-ink font-bold px-5 py-2.5 rounded-lg text-xs md:text-sm transition-colors inline-flex items-center gap-2"
              >
                <span>⬇</span>
                <span>{t.qrDownloadBtn}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
