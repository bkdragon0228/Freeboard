import { IQuery } from "../../../../commons/types/generated/types";

export interface MarketCommentListUIProps {
    questionData : Pick<IQuery, 'fetchUseditemQuestions'>;
    handleClickDelete : (id : string) => void;
    handleClickUpdate : (id: string) => (updateValue: string) => void;
    isEdit : boolean;
    handleEdit : () => void;
    isReply : boolean;
    handleRelpy : () => void;
}