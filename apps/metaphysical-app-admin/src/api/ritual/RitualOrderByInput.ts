import { SortOrder } from "../../util/SortOrder";

export type RitualOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  ritualName?: SortOrder;
  updatedAt?: SortOrder;
};
