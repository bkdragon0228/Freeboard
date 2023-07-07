import { TBestBoardsQuery } from "../../../hook/useBestBoards";
import { TBestUseditemsQuery } from "../../../hook/useBestUseditems";

export interface IMainUIProps {
    bestBoards : TBestBoardsQuery;
    bestUseditems : TBestUseditemsQuery;
    animationText : string;
}