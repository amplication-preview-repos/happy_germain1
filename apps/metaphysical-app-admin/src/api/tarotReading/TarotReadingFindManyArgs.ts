import { TarotReadingWhereInput } from "./TarotReadingWhereInput";
import { TarotReadingOrderByInput } from "./TarotReadingOrderByInput";

export type TarotReadingFindManyArgs = {
  where?: TarotReadingWhereInput;
  orderBy?: Array<TarotReadingOrderByInput>;
  skip?: number;
  take?: number;
};
