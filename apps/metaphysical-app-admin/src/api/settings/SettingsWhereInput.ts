import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SettingsWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
