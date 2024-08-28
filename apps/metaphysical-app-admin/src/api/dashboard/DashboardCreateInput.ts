import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DashboardCreateInput = {
  user?: UserWhereUniqueInput | null;
};
