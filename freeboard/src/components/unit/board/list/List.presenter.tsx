import React, { ChangeEvent, useState } from "react";
import * as S from "./List.style";
import { getDate } from "../../../../commons/utils/utils";
import { IQuery } from "../../../../commons/types/generated/types";
import Pagenation from "../../../commons/pagination/pagination";
import { ApolloQueryResult, OperationVariables } from "@apollo/client";

export default function BoardListUI({
  data,
  handleCreateBoard,
  handleMoveDetail,
  page,
  setPage,
  refetchBoards,
  refetchLastPage,
  lastPage
} : {
  data : Pick<IQuery, "fetchBoards">;
  handleCreateBoard : React.MouseEventHandler<HTMLButtonElement> ;
  handleMoveDetail : React.MouseEventHandler<HTMLDivElement>;
  page : number;
  setPage : React.Dispatch<React.SetStateAction<number>>;
  refetchBoards : (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchLastPage : any;
  lastPage : number;
}) {
  const dummy = Array.from({ length: 4 }, (v, i) => {
    return {
      id: Math.random(),
      ele: i,
    };
  });
  const [debounce, setDebounce] = useState(0)
  const [searchTerm, setSearchTerm] = useState<string>('')

  const getDebounce = (callback : () => void, timeout : number = 500) => {
      if(debounce) window.clearTimeout(debounce)
      const timer = window.setTimeout(() => {
        callback()
      }, timeout)
      setDebounce(timer)
  }

  const onChangeInput = (e : ChangeEvent<HTMLInputElement>) => {
    getDebounce(() => {
      setSearchTerm(e.target.value)
    }, 200)
  }

  const onClickSearchButton = () => {
    getDebounce(() => {
      refetchBoards({
        search : searchTerm,
        page : 1
      })
      refetchLastPage({
        search : searchTerm
      })
    })
  }



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
        <S.searchIcon
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
            fill="black"
          />
        </S.searchIcon>

        <S.SearchInput placeholder="제목을 검색해주세요." onChange={onChangeInput} />
        <S.PeriodInput />
        <S.Button onClick={onClickSearchButton}>검색하기</S.Button>
      </S.InputWrapper>

      <S.ListWrapper>
        <S.List>
          {data?.fetchBoards.map((e, i) => (
            <S.Element key={e._id}>
              <div>{i + 1}</div>
              <S.ElementTitle id={e._id} onClick={handleMoveDetail}>
                {e.title}
              </S.ElementTitle>
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
