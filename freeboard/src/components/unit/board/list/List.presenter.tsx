import React, { ChangeEvent, useState } from "react";
import * as S from "./List.style";
import { getDate } from "../../../../commons/utils/utils";
import { IQuery } from "../../../../commons/types/generated/types";
import Pagenation from "../../../commons/pagination/pagination";
import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import SearchBar from "../../../commons/searchBar/SearchBar";
import ItemCard from "../../../commons/ItemCard";
import useBestBoards from "../../../../hook/useBestBoards";
import DataList from "../../../commons/DataList/DataList";

export default function BoardListUI({
  data,
  handleCreateBoard,
  handleMoveDetail,
  page,
  setPage,
  refetchBoards,
  refetchLastPage,
  lastPage,
  onChangeSearchTerm,
  searchTerm,
} : {
  data : Pick<IQuery, "fetchBoards">;
  handleCreateBoard : React.MouseEventHandler<HTMLButtonElement> ;
  handleMoveDetail : React.MouseEventHandler<HTMLDivElement>;
  page : number;
  setPage : React.Dispatch<React.SetStateAction<number>>;
  refetchBoards : (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchLastPage : any;
  lastPage : number;
  onChangeSearchTerm : (value : string) => void;
  searchTerm : string;
}) {
    const {data : beatItmes} = useBestBoards()


    return (
      <S.Container>
        <S.Best>
          <h2>베스트 게시글</h2>
          <ItemCard
            bestItems={beatItmes?.fetchBoardsOfTheBest}
          />
        </S.Best>
        <S.InputWrapper>
          <SearchBar
              refetch={refetchBoards}
              refetchCount={refetchLastPage}
              onChangeSearchTerm={onChangeSearchTerm}
            />
        </S.InputWrapper>
        <div style={{
          width : '1200px',
          position : 'relative'
        }}>
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
        </div>


      </S.Container>
    );
}
