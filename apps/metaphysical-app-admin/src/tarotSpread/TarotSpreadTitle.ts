import { TarotSpread as TTarotSpread } from "../api/tarotSpread/TarotSpread";

export const TAROTSPREAD_TITLE_FIELD = "spreadName";

export const TarotSpreadTitle = (record: TTarotSpread): string => {
  return record.spreadName?.toString() || String(record.id);
};
