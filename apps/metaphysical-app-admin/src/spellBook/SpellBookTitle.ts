import { SpellBook as TSpellBook } from "../api/spellBook/SpellBook";

export const SPELLBOOK_TITLE_FIELD = "spellName";

export const SpellBookTitle = (record: TSpellBook): string => {
  return record.spellName?.toString() || String(record.id);
};
