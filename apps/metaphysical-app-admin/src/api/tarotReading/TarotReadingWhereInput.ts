import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TarotReadingWhereInput = {
  cards?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  question?: StringNullableFilter;
  result?: StringNullableFilter;
  spreadType?: StringNullableFilter;
};
