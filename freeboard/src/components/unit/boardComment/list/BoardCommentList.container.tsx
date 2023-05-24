import React from 'react'
import BoardCommentListUI from './BoardCommentList.presenter'

import { useRouter } from 'next/router'

import { useQuery, useMutation } from "@apollo/client"
import {FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENTS } from "./BoardCommentList.queries"
import { IQuery, IQueryFetchBoardCommentsArgs } from '../../../../commons/types/generated/types'


export default function BoardCommentList() {
    const router = useRouter();
    const {loading, error, data, fetchMore : fetchCommnetsMore} = useQuery<Pick<IQuery, 'fetchBoardComments'>, IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {variables : {
        page : 1,
        boardId : String(router.query.boardId),
    }});
    const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENTS);

    if(loading) {
        return <div>Loading...</div>
    }

    if(error) {
        return <div>Error...</div>
    }

    const handleClickDelete :React.MouseEventHandler<HTMLButtonElement> = async (event) => {
        const myPassword = prompt('비밀번호를 입력하세요.');

        try {
            await deleteBoardComment({
                variables : {
                    password : myPassword,
                    boardCommentId : event.currentTarget.id,
                },
                refetchQueries : [
                    {
                        query : FETCH_BOARD_COMMENTS,
                        variables : {
                            page : 1,
                            boardId : router.query.boardId,
                        }
                    }
                ]
            });
        } catch (err) {
            throw err
        }

    }

    const onClickUpdata = () => {

    }

    const handleFetchBoardMore = () => {
        if(!data?.fetchBoardComments.length) return

        fetchCommnetsMore({
            variables : {
                boardId : router.query.boardId,
                page : Math.ceil(data?.fetchBoardComments.length / 10) + 1
            },
            updateQuery : (prev, {fetchMoreResult}) =>  {
                if(!fetchMoreResult.fetchBoardComments) {
                    return {
                        fetchBoardComments : [...prev.fetchBoardComments]
                    }
                }

                return {
                    fetchBoardComments : [...prev.fetchBoardComments, ...fetchMoreResult.fetchBoardComments]
                }
            }
        })
    }


  return (
    <BoardCommentListUI
        data={data}
        handleClickDelete={handleClickDelete}
        handleFetchBoardMore={handleFetchBoardMore}
    />
  )
}
