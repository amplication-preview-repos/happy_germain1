import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RitualWhereInput = {
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  ritualName?: StringNullableFilter;
};
