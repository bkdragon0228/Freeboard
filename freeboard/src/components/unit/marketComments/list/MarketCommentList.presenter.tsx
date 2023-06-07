import React from 'react';
import { MarketCommentListUIProps } from './MarketCommentList.type'

import * as S from './MarketCommentList.style'
import ProfileImage from '../../../commons/profileImage';

const MarketCommentListUI : React.FC<MarketCommentListUIProps> = ({
    questionData
}) => {
    return (
        <S.Container>

            <S.Questions>
                {
                    questionData?.fetchUseditemQuestions.map((question) => (
                        <S.Question>
                            <S.RowWrapper>
                                <ProfileImage url={ question.user.picture ? `https://storage.googleapis.com/${question?.user.picture}` : ''}/>
                                <S.ColWrapper>
                                    <div>
                                        {question?.user.name}
                                    </div>
                                    <div>
                                        {question?.contents}
                                    </div>
                                </S.ColWrapper>
                            </S.RowWrapper>

                        </S.Question>
                    ))
                }
            </S.Questions>
        </S.Container>
    );
};

export default MarketCommentListUI;