import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { FETCH_USED_ITEM_QUESTIONS, DELETE_USED_ITEM_QUESTION } from './MarketCommentList.query';

import MarketCommentListUI from './MarketCommentList.presenter';
import { IMutation, IMutationDeleteUseditemQuestionArgs, IQuery, IQueryFetchUseditemQuestionsArgs } from '../../../../commons/types/generated/types';
import { useRouter } from 'next/router';

const MarketCommentList = () => {
    const router = useRouter()
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

    return (
       <MarketCommentListUI
            questionData={qusetionData}
            handleClickDelete={handleClickDelete}
       />
    );
};

export default MarketCommentList;