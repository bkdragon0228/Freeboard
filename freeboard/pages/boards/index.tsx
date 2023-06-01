import React from "react";
import BoardList from "../../src/components/unit/board/list/List.container";
import withAuth from "../../src/hoc/withAuth";

const BoardListPage = () => {
  return (
    <>
      <BoardList />
    </>
  );
}

export default withAuth(BoardListPage, null)