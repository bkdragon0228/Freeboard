import React, { ChangeEvent, useState } from "react";
import * as S from "./List.style";
import { getDate } from "../../../../commons/utils/utils";
import { IQuery } from "../../../../commons/types/generated/types";
import Pagenation from "../../../commons/pagination/pagination";
import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import SearchBar from "../../../commons/searchBar/SearchBar";

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
  const dummy = Array.from({ length: 4 }, (v, i) => {
    return {
      id: Math.random(),
      ele: i,
    };
  });


  return (
    <S.Container>
      <S.Best>
        <S.Title>베스트 게시글</S.Title>
        <div style={{ display: "flex", columnGap: "24px" }}>
          {dummy.map((e) => (
            <div
              key={e.id}
              style={{
                width: "282px",
                height: "257px",
                borderRadius: "20px",
                border: "1px solid black",
              }}
            >
              {e.ele}
            </div>
          ))}
        </div>
      </S.Best>
      {/*  베스트 게시글 */}

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
              <div>
                {
                  e.title.replaceAll(searchTerm, `!@#$${searchTerm}!@#$`).split('!@#$').map((title, i) => (
                    <S.ElementTitle id={e._id} onClick={handleMoveDetail} key={i} isKeyword={title === searchTerm ? true : false}>
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
