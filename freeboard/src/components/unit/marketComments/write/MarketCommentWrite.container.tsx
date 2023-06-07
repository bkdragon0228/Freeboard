import React from 'react';
import { CREATED_USED_ITEM_QUESTION } from './MarketCommentWrite.query';
import { useMutation } from '@apollo/client';

import MarketCommentWriteUI from './MarketCommentWrite.presenter';
import { IMutation, IMutationCreateUseditemQuestionArgs } from '../../../../commons/types/generated/types';
import { useRouter } from 'next/router';

const MarketCommentWrite = () => {
    const router = useRouter()
    const [createQuestion] = useMutation<Pick<IMutation, 'createUseditemQuestion'>, IMutationCreateUseditemQuestionArgs>(CREATED_USED_ITEM_QUESTION)

    const handleSubmit = async (value : string) => {
        try {
            const result = await createQuestion({
                variables : {
                    useditemId : router.query.id as string,
                    createUseditemQuestionInput : {
                        contents : value
                    }

                }
            })

            console.log('질문 작성 성공')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <MarketCommentWriteUI
            handleQuestion={handleSubmit}
        />
    );
};

export default MarketCommentWrite;