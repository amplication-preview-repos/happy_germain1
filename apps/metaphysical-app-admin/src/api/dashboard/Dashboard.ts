import { User } from "../user/User";

export type Dashboard = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
