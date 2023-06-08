import React from 'react';
import { MarketCommentListUIProps } from './MarketCommentList.type'

import * as S from './MarketCommentList.style'
import Question from './components/Question';

const MarketCommentListUI : React.FC<MarketCommentListUIProps> = ({
    questionData,
    handleClickDelete,
    handleClickUpdate,
    handleEdit,
    isEdit,
    isReply,
    handleRelpy
}) => {

    return (
        <S.Container>
            <S.Questions>
                {
                    questionData?.fetchUseditemQuestions.map((question) => (
                        <Question
                            question={question}
                            handleClickDelete={handleClickDelete}
                            handleClickUpdate={handleClickUpdate}
                            handleEdit={handleEdit}
                            isEdit={isEdit}
                            isReply={isReply}
                            handleRelpy={handleRelpy}
                        />
                    ))
                }
            </S.Questions>
        </S.Container>
    );
};

export default MarketCommentListUI;