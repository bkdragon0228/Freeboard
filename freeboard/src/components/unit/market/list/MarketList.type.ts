import { IQuery } from "../../../../commons/types/generated/types";

export interface MarketListUIProps {
    itemsList : Pick<IQuery, 'fetchUseditems'>;
    itemListfetchMore : () => void;
    bestItemsList : Pick<IQuery, "fetchUseditemsOfTheBest">;
}