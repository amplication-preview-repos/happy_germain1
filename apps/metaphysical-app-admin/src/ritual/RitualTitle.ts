import { Ritual as TRitual } from "../api/ritual/Ritual";

export const RITUAL_TITLE_FIELD = "ritualName";

export const RitualTitle = (record: TRitual): string => {
  return record.ritualName?.toString() || String(record.id);
};
