import { ReadingPlan } from "@/data/readingPlans";

const DAY_MAP: Record<string, string> = {
  "Segunda-feira": "Monday",
  "Terça-feira": "Tuesday",
  "Quarta-feira": "Wednesday",
  "Quinta-feira": "Thursday",
  "Sexta-feira": "Friday",
  "Sábado": "Saturday",
  "Domingo": "Sunday",
  "Segunda": "Monday",
  "Terça": "Tuesday",
  "Quarta": "Wednesday",
  "Quinta": "Thursday",
  "Sexta": "Friday"
};

const BIBLE_BOOKS: Record<string, string> = {
  "Gênesis": "Genesis", "Êxodo": "Exodus", "Levítico": "Leviticus", "Números": "Numbers", "Deuteronômio": "Deuteronomy",
  "Josué": "Joshua", "Juízes": "Judges", "Rute": "Ruth", "Samuel": "Samuel", "Reis": "Kings", "Crônicas": "Chronicles",
  "Esdras": "Ezra", "Neemias": "Nehemiah", "Ester": "Esther", "Jó": "Job", "Salmo": "Psalm", "Salmos": "Psalms", 
  "Provérbios": "Proverbs", "Eclesiastes": "Ecclesiastes", "Cantares": "Song of Solomon",
  "Isaías": "Isaiah", "Jeremias": "Jeremiah", "Lamentações": "Lamentations", "Ezequiel": "Ezekiel", "Daniel": "Daniel",
  "Oseias": "Hosea", "Joel": "Joel", "Amós": "Amos", "Obadias": "Obadiah", "Jonas": "Jonah", "Miqueias": "Micah",
  "Naum": "Nahum", "Habacuque": "Habakkuk", "Sofonias": "Zephaniah", "Ageu": "Haggai", "Zacarias": "Zechariah", "Malaquias": "Malachi",
  "Mateus": "Matthew", "Marcos": "Mark", "Lucas": "Luke", "João": "John", "Atos": "Acts",
  "Romanos": "Romans", "Coríntios": "Corinthians", "Gálatas": "Galatians", "Filipenses": "Philippians",
  "Colossenses": "Colossians", "Tessalonicenses": "Thessalonians", "Timóteo": "Timothy", "Tito": "Titus",
  "Filemom": "Philemon", "Hebreus": "Hebrews", "Tiago": "James", "Pedro": "Peter", "Judas": "Jude", "Apocalipse": "Revelation"
};

export function translateReadingPlan(plan: ReadingPlan, locale: string): ReadingPlan {
  if (locale !== 'en') return plan;

  const translateReading = (text: string) => {
    let newText = text;
    for (const [pt, en] of Object.entries(BIBLE_BOOKS)) {
      const regex = new RegExp('\\b' + pt + '\\b', 'g');
      newText = newText.replace(regex, en);
    }
    return newText;
  };

  const translateDayName = (name: string) => {
    let newName = name;
    for (const [pt, en] of Object.entries(DAY_MAP)) {
      if (newName.includes(pt)) {
        newName = newName.replace(pt, en);
      }
    }
    newName = newName.replace("Oração", "Prayer");
    return newName;
  };

  const subtitle = plan.subtitle.replace("Semana", "Week");
  
  let dateRange = plan.dateRange;
  if (dateRange) {
    dateRange = dateRange.replace(/\ba\b/g, "to");
  }

  return {
    ...plan,
    subtitle,
    dateRange,
    days: plan.days.map(day => ({
      ...day,
      name: translateDayName(day.name),
      readings: day.readings.map(translateReading)
    })),
    sunday: {
      ...plan.sunday,
      name: translateDayName(plan.sunday.name),
    }
  };
}
