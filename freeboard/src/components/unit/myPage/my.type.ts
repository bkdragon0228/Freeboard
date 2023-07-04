import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { IQuery } from "../../../commons/types/generated/types";


export interface MYUIProps {
    useditemsIsoldData : Pick<IQuery, 'fetchUseditemsISold'>;
    pickedUseditemData : Pick<IQuery, 'fetchUseditemsIPicked'>;
    page : number;
    lastPage : number;
    setPage : React.Dispatch<React.SetStateAction<number>>;
    searchTerm : string;
    setSearchTerm : React.Dispatch<React.SetStateAction<string>>;
    refetchUseditemIsold : (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchUseditemsISold'>>>;
    refetchUseditemPicked : (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchUseditemsIPicked'>>>;
    isSoldItem : boolean;
    handleItemCate : (value : boolean) => void;
}