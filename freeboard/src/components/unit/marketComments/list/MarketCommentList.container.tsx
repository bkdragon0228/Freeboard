import React, { useCallback, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { FETCH_USED_ITEM_QUESTIONS, DELETE_USED_ITEM_QUESTION, UPDATE_USED_ITEM_QUESTION, FETCH_USED_ITEM_QUESTION_ANSWERS } from './MarketCommentList.query';

import MarketCommentListUI from './MarketCommentList.presenter';
import { IMutation, IMutationDeleteUseditemQuestionArgs, IMutationUpdateUseditemQuestionArgs, IQuery, IQueryFetchUseditemQuestionAnswersArgs, IQueryFetchUseditemQuestionsArgs } from '../../../../commons/types/generated/types';
import { useRouter } from 'next/router';

const MarketCommentList = () => {
    const router = useRouter()
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const {data : qusetionData} = useQuery<Pick<IQuery, 'fetchUseditemQuestions'>, IQueryFetchUseditemQuestionsArgs>(FETCH_USED_ITEM_QUESTIONS, {
        variables : {
            useditemId : router.query.id as string,
            page : 1
        }
    })

    const [deleteQuestion] = useMutation<Pick<IMutation , 'deleteUseditemQuestion'>, IMutationDeleteUseditemQuestionArgs>(DELETE_USED_ITEM_QUESTION, {
        refetchQueries : [
            {query : FETCH_USED_ITEM_QUESTIONS, variables : {page : 1, useditemId : router.query.id as string}}
        ]
    })

    const handleClickDelete = (id : string) => {
        alert('질문을 삭제하시겠습니까?')
        deleteQuestion({
            variables : {
                useditemQuestionId : id
            }
        })
    }

    const [updateQuestion] = useMutation<Pick<IMutation, 'updateUseditemQuestion'>, IMutationUpdateUseditemQuestionArgs>(UPDATE_USED_ITEM_QUESTION, {
        refetchQueries : [
            {query : FETCH_USED_ITEM_QUESTIONS, variables : {page : 1, useditemId : router.query.id as string}}
        ],
        onCompleted : () => {
            setIsEdit(false)
        }
    })

    const handleClickUpdate = (id : string) => {
        return (updateValue : string) => {
            updateQuestion({
                variables : {
                    updateUseditemQuestionInput : {
                        contents : updateValue
                    },
                    useditemQuestionId : id
                }
            })
        }
    }

    const handleEdit = () => {
        setIsEdit((prev) => !prev)
    }


    return (
       <MarketCommentListUI
            questionData={qusetionData}
            handleClickDelete={handleClickDelete}
            handleClickUpdate={handleClickUpdate}
            isEdit={isEdit}
            handleEdit={handleEdit}
       />
    );
};

export default MarketCommentList;