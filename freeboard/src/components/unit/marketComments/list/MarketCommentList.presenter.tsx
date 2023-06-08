import React, { useCallback, useEffect, useState } from 'react';
import { MarketCommentListUIProps } from './MarketCommentList.type'

import useDate from '../../../../hook/useDate';
import useUser from '../../../../hook/useUser';

import * as S from './MarketCommentList.style'
import ProfileImage from '../../../commons/profileImage';
import ComboBox from '../../../commons/comboBox/ComboBox';

const MarketCommentListUI : React.FC<MarketCommentListUIProps> = ({
    questionData,
    handleClickDelete,
    handleClickUpdate,
    handleEdit,
    isEdit
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

    const renderByisEdit = (isEdit : boolean, contents : string, createdAt : Date, id : string) => {
        if(!isEdit) {
            return (
                <>
                    <div>
                        {contents ? contents : ''}
                    </div>
                    <S.Date>
                        {getDate(createdAt ? createdAt : new Date())}
                    </S.Date>
                </>
            )
        }

        if(isEdit) {
            return (
                <>
                    <ComboBox initialValue={contents ? contents : '수정할 내용을 입력해주세요.'}>
                        <S.ColWrapper>
                            <ComboBox.TextArea width={1000} />
                            <ComboBox.Button handleSubmit={handleClickUpdate(id)}>수정하기</ComboBox.Button>
                        </S.ColWrapper>
                    </ComboBox>
                </>
            )
        }
    }


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
                                    {
                                        renderByisEdit(isEdit, question?.contents, question?.createdAt, question?._id)
                                    }
                                </S.ColWrapper>
                            </S.RowWrapper>
                            <div>
                                {
                                    getEdit(question?.user._id) && (
                                        <S.RowWrapper>
                                            <S.EditBtn onClick={handleEdit}>
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