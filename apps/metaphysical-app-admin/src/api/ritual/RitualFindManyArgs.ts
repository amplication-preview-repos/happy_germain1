import { RitualWhereInput } from "./RitualWhereInput";
import { RitualOrderByInput } from "./RitualOrderByInput";

export type RitualFindManyArgs = {
  where?: RitualWhereInput;
  orderBy?: Array<RitualOrderByInput>;
  skip?: number;
  take?: number;
};
