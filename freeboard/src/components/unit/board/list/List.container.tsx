import React, { useCallback, useState } from "react";
import { FETCH_BOARDS , FETCH_BOARDS_COUNT} from "./List.querys";
import { IQuery } from "../../../../commons/types/generated/types";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import useBestBoards from "../../../../hook/useBestBoards";

import BoardListUI from "./List.presenter";

export default function BoardList() {
  const router = useRouter();
  const [page, setPage] = useState<number>(1)
  const [searchTerm, setSearchTerm] = useState<string>('')

  const { data, loading, refetch : refetchBoards } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARDS, {
    variables: {
      page: 1,
    },
  })

  const {data : lastPage, refetch : refetchLastPage} = useQuery<Pick<IQuery, 'fetchBoardsCount'>>(FETCH_BOARDS_COUNT)

  const { data : bestItems } = useBestBoards()

  const onChangeSearchTerm = useCallback((value : string) => {
    setSearchTerm(value)
  }, [setSearchTerm])


  const handleCreateBoard = () => {
    router.push("boards/new");
  }

  if (loading) {
    return <div>Loading..</div>;
  }

  return (
    <BoardListUI
      data={data}
      handleCreateBoard={handleCreateBoard}
      refetchBoards={refetchBoards}
      refetchLastPage={refetchLastPage}
      page={page}
      setPage={setPage}
      lastPage={lastPage?.fetchBoardsCount}
      onChangeSearchTerm={onChangeSearchTerm}
      searchTerm={searchTerm}
      bestItems={bestItems}
    />
  );
}
