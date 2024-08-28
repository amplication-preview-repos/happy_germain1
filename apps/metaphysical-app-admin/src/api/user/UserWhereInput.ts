import { DashboardListRelationFilter } from "../dashboard/DashboardListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SettingsListRelationFilter } from "../settings/SettingsListRelationFilter";

export type UserWhereInput = {
  dashboards?: DashboardListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  settingsItems?: SettingsListRelationFilter;
  username?: StringFilter;
};
