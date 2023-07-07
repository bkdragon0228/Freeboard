import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export interface BoardListUIProps {
    data : Pick<IQuery, "fetchBoards">;
    handleCreateBoard : React.MouseEventHandler<HTMLButtonElement> ;
    page : number;
    setPage : React.Dispatch<React.SetStateAction<number>>;
    refetchBoards : (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
    refetchLastPage : any;
    lastPage : number;
    onChangeSearchTerm : (value : string) => void;
    searchTerm : string;
    bestItems : Pick<IQuery, 'fetchBoardsOfTheBest'>;
}