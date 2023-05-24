import React from "react";
import BoardDetail from "../../../src/components/unit/board/detail/BoardDetail.container";
import BoardComment from "../../../src/components/unit/boardComment/write/BoardComment.container";
import BoardCommentList from "../../../src/components/unit/boardComment/list/BoardCommentList.container"

export default function FreeBoardDetailPage() {
  return (
    <>
      <BoardDetail />
      <BoardComment />
      <BoardCommentList />
    </>
  );
}
