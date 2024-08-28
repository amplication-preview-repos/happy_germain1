import { SortOrder } from "../../util/SortOrder";

export type SpellBookOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  ingredients?: SortOrder;
  instructions?: SortOrder;
  spellName?: SortOrder;
  updatedAt?: SortOrder;
};
