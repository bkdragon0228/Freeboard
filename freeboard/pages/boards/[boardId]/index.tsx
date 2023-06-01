import React from "react";
import BoardDetail from "../../../src/components/unit/board/detail/BoardDetail.container";
import BoardComment from "../../../src/components/unit/boardComment/write/BoardComment.container";
import BoardCommentList from "../../../src/components/unit/boardComment/list/BoardCommentList.container"
import withAuth from "../../../src/hoc/withAuth";

const FreeBoardDetailPage = () => {
  return (
    <>
      <BoardDetail />
      <BoardComment />
      <BoardCommentList />
    </>
  );
}

export default withAuth(FreeBoardDetailPage, null)