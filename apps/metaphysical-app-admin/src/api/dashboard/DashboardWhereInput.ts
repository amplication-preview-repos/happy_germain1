import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DashboardWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
