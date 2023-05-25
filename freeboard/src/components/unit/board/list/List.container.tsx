import React, { useCallback, useState } from "react";
import BoardListUI from "./List.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS , FETCH_BOARDS_COUNT} from "./List.querys";
import { useRouter } from "next/router";
import { IQuery } from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();
  const [page, setPage] = useState<number>(1)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const { data, loading, refetch : refetchBoards } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARDS, {
    variables: {
      page: 1,
    },
  });

  const {data : lastPage, refetch : refetchLastPage} = useQuery<Pick<IQuery, 'fetchBoardsCount'>>(FETCH_BOARDS_COUNT)

  if (loading) {
    return <div>Loading..</div>;
  }

  const handleMoveDetail :  React.MouseEventHandler<HTMLDivElement> = (event) => {
    router.push(`boards/${event.currentTarget.id}`);
  };

  const handleCreateBoard = () => {
    router.push("boards/new");
  };

  const onChangeSearchTerm = useCallback((value : string) => {
    setSearchTerm(value)
  }, [setSearchTerm])

  return (
    <BoardListUI
      data={data}
      handleMoveDetail={handleMoveDetail}
      handleCreateBoard={handleCreateBoard}
      refetchBoards={refetchBoards}
      refetchLastPage={refetchLastPage}
      page={page}
      setPage={setPage}
      lastPage={lastPage.fetchBoardsCount}
      onChangeSearchTerm={onChangeSearchTerm}
      searchTerm={searchTerm}
    />
  );
}
