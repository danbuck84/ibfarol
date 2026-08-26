export type EventItem = {
  id: string;
  title: string;
  dateStr: string; // ISO string like "2026-08-30T10:00:00"
  description: string;
};

export const currentEvents: EventItem[] = [
  {
    id: "1",
    title: "Classe de Novos Membros",
    dateStr: "2026-09-10T19:00:00",
    description: "Início da nossa classe de integração para novos membros.",
  },
  {
    id: "2",
    title: "Encontro .JPEG (Jovens)",
    dateStr: "2026-09-15T19:30:00",
    description: "Nosso encontro mensal de jovens.",
  },
  {
    id: "3",
    title: "Culto Especial de Aniversário",
    dateStr: "2026-10-10T10:00:00",
    description: "Celebração do aniversário da igreja.",
  }
];
