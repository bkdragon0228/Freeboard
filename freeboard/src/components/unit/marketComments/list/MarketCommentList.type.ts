import { IQuery } from "../../../../commons/types/generated/types";

export interface MarketCommentListUIProps {
    questionData : Pick<IQuery, 'fetchUseditemQuestions'>;
    handleClickDelete : (id : string) => void;
}