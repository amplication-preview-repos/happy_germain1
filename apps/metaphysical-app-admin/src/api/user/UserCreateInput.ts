import { DashboardCreateNestedManyWithoutUsersInput } from "./DashboardCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SettingsCreateNestedManyWithoutUsersInput } from "./SettingsCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  dashboards?: DashboardCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  settingsItems?: SettingsCreateNestedManyWithoutUsersInput;
  username: string;
};
