import { Dashboard } from "../dashboard/Dashboard";
import { JsonValue } from "type-fest";
import { Settings } from "../settings/Settings";

export type User = {
  createdAt: Date;
  dashboards?: Array<Dashboard>;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  settingsItems?: Array<Settings>;
  updatedAt: Date;
  username: string;
};
