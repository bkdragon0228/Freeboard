import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { IQuery } from "../../../commons/types/generated/types";

interface ISections {
    path : string;
    name : string
}

export interface MYUIProps {
    userData :  Pick<IQuery, "fetchUserLoggedIn">;
    useditemsIsoldData : Pick<IQuery, 'fetchUseditemsISold'>;
    page : number;
    lastPage : number;
    setPage : React.Dispatch<React.SetStateAction<number>>;
    searchTerm : string;
    setSearchTerm : React.Dispatch<React.SetStateAction<string>>;
    pagePath : ISections[];
    refetchUseditemIsold : (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchUseditemsISold'>>>
}