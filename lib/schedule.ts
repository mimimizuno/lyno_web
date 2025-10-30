export type Day = { date: string; dow: string; note?: string; open?: string; close?: string };
export const WEEK: Day[] = [
  { date: "10/31", dow: "FRI", open: "16:00", close: "20:00" },
  { date: "11/01", dow: "SAT", note: "イベント出店" },
  { date: "11/02", dow: "SUN", open: "12:00", close: "18:00" },
  { date: "11/03", dow: "MON", note: "CLOSED" },
  { date: "11/04", dow: "TUE", open: "12:00", close: "18:00" },
];