import { SpellBookWhereInput } from "./SpellBookWhereInput";
import { SpellBookOrderByInput } from "./SpellBookOrderByInput";

export type SpellBookFindManyArgs = {
  where?: SpellBookWhereInput;
  orderBy?: Array<SpellBookOrderByInput>;
  skip?: number;
  take?: number;
};
