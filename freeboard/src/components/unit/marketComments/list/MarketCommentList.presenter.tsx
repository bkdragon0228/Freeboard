import React, { useCallback, useEffect, useState } from 'react';
import { MarketCommentListUIProps } from './MarketCommentList.type'

import * as S from './MarketCommentList.style'
import ProfileImage from '../../../commons/profileImage';
import useDate from '../../../../hook/useDate';
import useUser from '../../../../hook/useUser';

const MarketCommentListUI : React.FC<MarketCommentListUIProps> = ({
    questionData,
    handleClickDelete
}) => {
    const getDate = useDate()
    const {data : userData} = useUser()

    const getEdit = useCallback((id : string) => {

        if(id === userData?.fetchUserLoggedIn._id) {
            return true
        }

        if(id !== userData?.fetchUserLoggedIn._id) {
            return false
        }
    }, [userData?.fetchUserLoggedIn._id])


    return (
        <S.Container>

            <S.Questions>
                {
                    questionData?.fetchUseditemQuestions.map((question) => (
                        <S.Question>
                            <S.RowWrapper>
                                <ProfileImage url={ question.user.picture ? `https://storage.googleapis.com/${question?.user.picture}` : ''}/>
                                <S.ColWrapper>
                                    <S.Name>
                                        {question?.user.name}
                                    </S.Name>
                                    <div>
                                        {question?.contents}
                                    </div>
                                    <S.Date>
                                        {getDate(question?.createdAt)}
                                    </S.Date>
                                </S.ColWrapper>
                            </S.RowWrapper>
                            <div>
                                {
                                    getEdit(question?.user._id) && (
                                        <S.RowWrapper>
                                            <S.EditBtn>
                                                <i className="ri-edit-line"></i>
                                            </S.EditBtn>
                                            <S.DeleteBtn id={question?._id} onClick={(e) => handleClickDelete(e.currentTarget.id)}>
                                                <i className="ri-close-line"></i>
                                            </S.DeleteBtn>
                                        </S.RowWrapper>

                                    )

                                }
                            </div>
                        </S.Question>
                    ))
                }
            </S.Questions>
        </S.Container>
    );
};

export default MarketCommentListUI;