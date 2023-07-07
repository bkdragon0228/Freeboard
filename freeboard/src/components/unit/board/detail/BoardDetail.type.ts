import { IBoard, IBoardAddress, IQuery, IUser } from "../../../../commons/types/generated/types";
import { MouseEventHandler } from "react";

export interface BoardDetailUIProps {
    data : Pick<IQuery, "fetchBoard">;
    handleDelete : MouseEventHandler<HTMLButtonElement>;
    handleLike : MouseEventHandler<HTMLDivElement>;
    handleDisLike : MouseEventHandler<HTMLDivElement>;
}

export interface BoardUserInfoProps {
    username : string;
    createdAt : Date;
    address : IBoardAddress;
}

export interface BoardAddressModalProps {
    address : IBoardAddress;
    isOpen : boolean;
}

export interface BoardContentsProps {
    boardContents : IBoard;
    handleLike : MouseEventHandler<HTMLDivElement>;
    handleDisLike : MouseEventHandler<HTMLDivElement>;
}

export interface BoardMenuProps {
    handleDelete : MouseEventHandler<HTMLButtonElement>;
}