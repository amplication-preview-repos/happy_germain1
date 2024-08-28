import { Journal as TJournal } from "../api/journal/Journal";

export const JOURNAL_TITLE_FIELD = "title";

export const JournalTitle = (record: TJournal): string => {
  return record.title?.toString() || String(record.id);
};
