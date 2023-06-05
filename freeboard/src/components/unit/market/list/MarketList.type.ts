import { ApolloQueryResult } from "@apollo/client";
import { IQuery, IQueryFetchUseditemsArgs } from "../../../../commons/types/generated/types";

export interface MarketListUIProps {
    itemsList : Pick<IQuery, 'fetchUseditems'>;
    itemsListRefetch :  (variables?: Partial<IQueryFetchUseditemsArgs>) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>
    itemListfetchMore : () => void;
    bestItemsList : Pick<IQuery, "fetchUseditemsOfTheBest">;
}