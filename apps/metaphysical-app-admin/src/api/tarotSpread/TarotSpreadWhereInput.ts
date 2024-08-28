import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TarotSpreadWhereInput = {
  id?: StringFilter;
  positions?: StringNullableFilter;
  spreadName?: StringNullableFilter;
};
