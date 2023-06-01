import { FieldErrorsImpl, SubmitHandler, UseFormHandleSubmit, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { IBoard } from "../../../../commons/types/generated/types";

export type BoardWriteProps = {
  isEdit? : boolean
}

export type BoardWriteUIProp = {
  register : UseFormRegister<FormData>;
  handleSubmit : UseFormHandleSubmit<FormData>;
  onSubmit : SubmitHandler<FormData>
  errors : Partial<FieldErrorsImpl<{
      writer: string;
      password: string;
      title: string;
      content: string;
    }>> ;
  isSubmitting : boolean;
  isAble : boolean;
  isEdit : boolean;
  boardData : Partial<IBoard>;
  setFormValue : UseFormSetValue<FormData>;
  images : string[];
  onChangeImages : (url : string, index : number) => void
}


export type FormData = {
    writer :  string;
    password : string;
    title : string;
    content : string;
    zipcode? : string;
    address? : string;
    addressDetail? : string;
    youtubeUrl? : string;
    main? : string
}