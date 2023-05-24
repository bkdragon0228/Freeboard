import { UseFormHandleSubmit, UseFormRegister, UseFormWatch } from "react-hook-form";
import { IBoardComment } from "../../../../commons/types/generated/types";

export type CommentInputType = {
    comment : string;
    password : string;
    writer : string;
    rating : number;
}

export type BoardCommentContainerProps = {
    isEdit? : boolean;
    defaultElement? : IBoardComment;
    setIsEdit? : React.Dispatch<React.SetStateAction<boolean>>;
}

export type BoardCommentUIprops = {
     register : UseFormRegister<CommentInputType>;
    handleSubmit : UseFormHandleSubmit<CommentInputType>;
    onSubmit : (formdata: CommentInputType) => Promise<void>;
    setStar  : React.Dispatch<React.SetStateAction<number>>;
    star : number;
    defaultElement : IBoardComment;
    isEdit : boolean;
    setIsEdit : React.Dispatch<React.SetStateAction<boolean>>;
}

export type UpdateCommentInput = {
    contents? : string;
    rating? : number;
}