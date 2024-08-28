import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SpellBookWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  ingredients?: StringNullableFilter;
  instructions?: StringNullableFilter;
  spellName?: StringNullableFilter;
};
