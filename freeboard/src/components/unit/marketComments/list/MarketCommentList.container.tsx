import React from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_USED_ITEM_QUESTIONS } from './MarketCommentList.query';

import MarketCommentListUI from './MarketCommentList.presenter';
import { IQuery, IQueryFetchUseditemQuestionsArgs } from '../../../../commons/types/generated/types';
import { useRouter } from 'next/router';

const MarketCommentList = () => {
    const router = useRouter()
    const {data : qusetionData} = useQuery<Pick<IQuery, 'fetchUseditemQuestions'>, IQueryFetchUseditemQuestionsArgs>(FETCH_USED_ITEM_QUESTIONS, {
        variables : {
            useditemId : router.query.id as string,
            page : 1
        }
    })

    return (
       <MarketCommentListUI
            questionData={qusetionData}
       />
    );
};

export default MarketCommentList;