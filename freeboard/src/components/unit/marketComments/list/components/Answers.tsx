import React from 'react';
import { IQuery } from '../../../../../commons/types/generated/types';

import * as S from '../MarketCommentList.style'
import ProfileImage from '../../../../commons/profileImage';
import useDate from '../../../../../hook/useDate';

interface AnswersProps {
    answersData : Pick<IQuery, 'fetchUseditemQuestionAnswers'>
}

const Answers : React.FC<AnswersProps> = ({
    answersData
}) => {

    const getDate = useDate()
    return (
        <div>
            {answersData?.fetchUseditemQuestionAnswers.map((answer) => (
                <S.RowWrapper>
                    <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 11L9 17L7.58 15.58L11.17 12H0V0H2V10H11.17L7.58 6.42L9 5L15 11Z" fill="black"/>
                    </svg>
                    <ProfileImage url={answer?.user.picture ? `https://storage.googleapis.com/${answer?.user.picture}` : ''} />
                    <S.ColWrapper>
                        <S.Name>
                            {answer?.user.name}
                        </S.Name>
                        <div>
                            {answer?.contents}
                        </div>
                        <S.Date>
                            {getDate(answer?.createdAt ? answer?.createdAt : new Date())}
                        </S.Date>
                    </S.ColWrapper>
                </S.RowWrapper>

            ))}
        </div>
    );
};

export default Answers;