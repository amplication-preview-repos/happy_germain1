import { DashboardUpdateManyWithoutUsersInput } from "./DashboardUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SettingsUpdateManyWithoutUsersInput } from "./SettingsUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  dashboards?: DashboardUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  settingsItems?: SettingsUpdateManyWithoutUsersInput;
  username?: string;
};
