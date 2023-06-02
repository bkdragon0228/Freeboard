import { IQuery } from "../../../../commons/types/generated/types";

export interface MarketListUIProps {
    itemsList : Pick<IQuery, 'fetchUseditems'>;
    bestItemsList : Pick<IQuery, "fetchUseditemsOfTheBest">;
}