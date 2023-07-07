import React from "react";
import { BoardDetailUIProps } from './BoardDetail.type'

import * as S from "./BoardDetail.styles";

import BoardUserInfo from "./components/BoardUserInfo";
import BoardContents from "./components/BoardContents";
import BoardMenu from "./components/BoardMenu";

export default function BoardDetailUI({
  data,
  handleDelete,
  handleLike,
  handleDisLike
} : BoardDetailUIProps
) {
  return (
    <S.DetailContainer>
      <S.ContentsWrapper>
        <BoardUserInfo
          username={data?.fetchBoard.writer}
          address={data?.fetchBoard.boardAddress}
          createdAt={data?.fetchBoard.createdAt}
        />
        <BoardContents
          boardContents={data?.fetchBoard}
          handleDisLike={handleDisLike}
          handleLike={handleLike}
        />
      </S.ContentsWrapper>
      <BoardMenu
        handleDelete={handleDelete}
      />
    </S.DetailContainer>
  );
}
