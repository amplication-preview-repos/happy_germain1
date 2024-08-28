import { SortOrder } from "../../util/SortOrder";

export type TarotReadingOrderByInput = {
  cards?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  question?: SortOrder;
  result?: SortOrder;
  spreadType?: SortOrder;
  updatedAt?: SortOrder;
};
