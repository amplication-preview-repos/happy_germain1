import { TarotReading as TTarotReading } from "../api/tarotReading/TarotReading";

export const TAROTREADING_TITLE_FIELD = "question";

export const TarotReadingTitle = (record: TTarotReading): string => {
  return record.question?.toString() || String(record.id);
};
