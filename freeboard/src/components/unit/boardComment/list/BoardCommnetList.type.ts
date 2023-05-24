import { IBoardComment, IQuery } from "../../../../commons/types/generated/types";


export type BoardCommentListUIprops = {
    data : Pick<IQuery, 'fetchBoardComments'>;
    handleClickDelete : React.MouseEventHandler<HTMLButtonElement>;
    handleFetchBoardMore : () => void
}

export type BoardCommentDetailProps = {
    comment : IBoardComment;
    handleClickDelete : React.MouseEventHandler<HTMLButtonElement>;
}