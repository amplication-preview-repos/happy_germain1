import { User } from "../user/User";

export type Settings = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
