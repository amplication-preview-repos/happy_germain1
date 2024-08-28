import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type JournalWhereInput = {
  content?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};