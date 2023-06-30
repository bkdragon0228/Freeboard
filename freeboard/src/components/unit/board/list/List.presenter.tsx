import React, { ChangeEvent, useState } from "react";
import * as S from "./List.style";
import { getDate } from "../../../../commons/utils/utils";
import { IQuery } from "../../../../commons/types/generated/types";
import Pagenation from "../../../commons/pagination/pagination";
import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import SearchBar from "../../../commons/searchBar/SearchBar";
import ItemCard from "../../../commons/ItemCard";
import useBestBoards from "../../../../hook/useBestBoards";

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
        <S.ListWrapper>
          <S.List>
            {data?.fetchBoards.map((e, i) => (
              <S.Element key={e._id}>
                <div>{i + 1}</div>
                <div id={e._id} onClick={handleMoveDetail} >
                  {
                    e.title.replaceAll(searchTerm, `!@#$${searchTerm}!@#$`).split('!@#$').map((title) => (
                      <S.ElementTitle key={e._id} isKeyword={title === searchTerm ? true : false}>
                        {title}
                      </S.ElementTitle>
                    ))
                  }
                </div>
                <div>{e.writer}</div>
                <div>{getDate(e.createdAt)}</div>
              </S.Element>
            ))}
          </S.List>
        </S.ListWrapper>
        <div
          style={{
            width: "1200px",
            display: "flex",
            justifyContent : 'space-between'
          }}
        >
          <Pagenation
            lastPage={lastPage}
            page={page}
            setPage={setPage}
            refetchBoards={refetchBoards}
          />
          <S.CreateButton onClick={handleCreateBoard}>
            게시글 등록하기
          </S.CreateButton>
        </div>
      </S.Container>
    );
}
