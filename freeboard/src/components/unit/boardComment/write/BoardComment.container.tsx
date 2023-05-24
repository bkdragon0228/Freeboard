import React, { useState } from 'react'
import BoardCommentUI from './BoardComment.presenter';
import { CREATE_BOARD_COMMNET , UPDATE_BOARD_COMMNETS} from "./BoardComment.query"
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries"
import { useMutation } from '@apollo/client/react';
import { useForm } from "react-hook-form";
import {useRouter} from 'next/router'
import { BoardCommentContainerProps, CommentInputType, UpdateCommentInput } from './BoardComment.type'
import { IMutation, IMutationUpdateBoardCommentArgs } from '../../../../commons/types/generated/types';

export default function BoardComment({
    isEdit,
    setIsEdit,
    defaultElement
}: BoardCommentContainerProps
) {
    const router = useRouter()
    const [star, setStar] = useState<number>(0);
    const [createComment] = useMutation(CREATE_BOARD_COMMNET, {
        refetchQueries : [
            {query : FETCH_BOARD_COMMENTS , variables : {page : 1 ,boardId : router.query.boardId }}
        ]
    })

    const [updateBoardComment] = useMutation<Pick<IMutation, 'updateBoardComment'>, IMutationUpdateBoardCommentArgs>(UPDATE_BOARD_COMMNETS, {
        refetchQueries : [
            {query : FETCH_BOARD_COMMENTS , variables : {page : 1 ,boardId : router.query.boardId }}
        ],
        onCompleted : () => {
            setIsEdit(false)
        }
    })

    const {register, handleSubmit, formState : {errors , isSubmitting}, reset, watch} = useForm<CommentInputType>({criteriaMode : "all"})
    const {comment, password : commentPassword } = watch()
    const onSubmit =  async (formdata : CommentInputType) => {
        console.log(formdata);
        if(!isEdit) {
            try {
                const result = await createComment({
                    variables : {
                        createBoardCommentInput : {
                            writer : formdata.writer,
                            contents : formdata.comment,
                            password : String(formdata.password),
                            rating : Number(formdata.rating)
                        },
                        boardId : router.query.boardId
                    }
                })

                console.log(result.data.createBoardComment)
                alert('댓글을 성공적으로 입력하였습니다.')
                setStar(0)
                reset()
            } catch (err) {
                throw err
            }
        }

        if(isEdit) {
            try {
                const updataCommentInput : UpdateCommentInput = {}
                if(comment) updataCommentInput.contents = comment
                if(star !== defaultElement?.rating) updataCommentInput.rating = star

                await updateBoardComment({
                    variables : {
                        updateBoardCommentInput : {
                           ...updataCommentInput,
                        },
                        password : commentPassword,
                        boardCommentId : defaultElement?._id
                    }
                })
                alert('댓글을 성공적으로 수정하였습니다.');
                reset();
            } catch (err) {
                throw err
            }
        }
    }


  return (
    <BoardCommentUI
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        setStar={setStar}
        star={star}
        defaultElement={defaultElement}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
    />
  )
}
