import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SettingsCreateInput = {
  user?: UserWhereUniqueInput | null;
};
