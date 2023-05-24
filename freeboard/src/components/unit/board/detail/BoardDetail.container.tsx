import React, { MouseEventHandler } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD, LIKE_BOARD, DISLIKE_BOARD } from "./BoardDetail.queries";
import { IMutation, IMutationDeleteBoardArgs, IMutationDislikeBoardArgs, IQuery, IQueryFetchBoardArgs } from "../../../../commons/types/generated/types";

export default function BoardDetail() {
  const router = useRouter();
  const { loading, data, error } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });

  const [deleteBoard] = useMutation<Pick<IMutation, "deleteBoard">,IMutationDeleteBoardArgs >(DELETE_BOARD);

  const [likeBoard] = useMutation<Pick<IMutation, 'likeBoard'>>(LIKE_BOARD, {
    refetchQueries : [
      {
        query : FETCH_BOARD,
        variables : {boardId : String(router.query.boardId)}
      }
    ]
  })
  const [disLikeBoard] = useMutation<Pick<IMutation, 'dislikeBoard'>, IMutationDislikeBoardArgs>(DISLIKE_BOARD, {
    refetchQueries : [
      {query : FETCH_BOARD,  variables: { boardId: String(router.query.boardId)}}
    ]
  });

  const handleDelete : MouseEventHandler<HTMLButtonElement> = async () => {
    const result = await deleteBoard({
      variables: { boardId: String(router.query.boardId) },
    });

    console.log(result);
    router.push("/boards");
  };

  const handleMove : MouseEventHandler<HTMLButtonElement> = () => {
    router.push("/boards");
  };

  const handleLike : MouseEventHandler<HTMLDivElement> = async () => {
    const result = await likeBoard({
      variables : {boardId : router.query.boardId}
    })

    console.log(result);
  }

  const handleDisLike : MouseEventHandler<HTMLDivElement> = async () => {
    const result = await disLikeBoard({
      variables : {boardId : String(router.query.boardId)}
    })

    console.log(result)
  }

  if (loading) {
    <div>Loading...</div>;
  }

  if (error) {
    <div>Error...</div>;
  }

  const handleMoveEdit : MouseEventHandler<HTMLButtonElement> = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  return (
    <BoardDetailUI
      data={data}
      handleDelete={handleDelete}
      handleMove={handleMove}
      handleMoveEdit={handleMoveEdit}
      handleLike={handleLike}
      handleDisLike={handleDisLike}
    />
  );
}
