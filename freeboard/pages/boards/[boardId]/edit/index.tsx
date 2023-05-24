import React from "react";
import BoardWrite from "../../../../src/components/unit/board/write/BoardWrite.container";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { boardState } from "../../../../state/boardState";
import { IQuery, IQueryFetchBoardArgs } from "../../../../src/commons/types/generated/types";

export const FETCH_BOARD = gql`
  query FetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      createdAt
      likeCount
      dislikeCount
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export default function BoardEditPage() {
  const router = useRouter();
  const setBoardData = useSetRecoilState(boardState);
  const { data, loading } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: {
      boardId: String(router.query.boardId),
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (data) {
    setBoardData(data?.fetchBoard);
  }

  console.log(data);

  return <BoardWrite isEdit={true} />;
}
