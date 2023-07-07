import React from "react";
import { BoardListUIProps } from "./List.type";

import * as S from "./List.style";
import SearchBar from "../../../commons/searchBar/SearchBar";
import DataList from "../../../commons/DataList/DataList";
import BestBoardList from "./components/BestBoardList";

export default function BoardListUI({
  data,
  handleCreateBoard,
  page,
  setPage,
  refetchBoards,
  refetchLastPage,
  lastPage,
  onChangeSearchTerm,
  searchTerm,
  bestItems
} : BoardListUIProps
) {
    return (
      <S.Container>
        <BestBoardList
          bestItems={bestItems}
        />
        <S.InputWrapper>
          <SearchBar
              refetch={refetchBoards}
              refetchCount={refetchLastPage}
              onChangeSearchTerm={onChangeSearchTerm}
            />
        </S.InputWrapper>
        <S.ListWrpper>
          <DataList
            data={data}
            refetchData={refetchBoards}
            lastPage={lastPage}
            page={page}
            searchTerm={searchTerm}
            setPage={setPage}
          />
          <S.CreateButton onClick={handleCreateBoard}>
            게시글 등록하기
          </S.CreateButton>
        </S.ListWrpper>
      </S.Container>
    );
}
