import React, { useCallback, useState } from 'react';
import { IMutation, IMutationCreateUseditemQuestionAnswerArgs, IQuery, IQueryFetchUseditemQuestionAnswersArgs, IUseditemQuestion } from '../../../../../commons/types/generated/types';
import { useMutation, useQuery } from '@apollo/client';
import { FETCH_USED_ITEM_QUESTION_ANSWERS, CREATE_USED_ITEM_QUESTION_ANSWER } from '../MarketCommentList.query';

import * as S from '../MarketCommentList.style'
import ProfileImage from '../../../../commons/profileImage';
import ComboBox from '../../../../commons/comboBox/ComboBox';
import useDate from '../../../../../hook/useDate';
import useUser from '../../../../../hook/useUser';
import Answers from './Answers';

interface QustionProps {
    question : IUseditemQuestion;
    isEdit : boolean;
    handleClickDelete : (id : string) => void;
    handleClickUpdate : (id: string) => (updateValue: string) => void;
    handleEdit : () => void;
}

const Question : React.FC<QustionProps>= ({
    isEdit,
    question,
    handleEdit,
    handleClickDelete,
    handleClickUpdate,
}) => {
    const getDate = useDate()
    const {data : userData} = useUser()
    const [isReply, setIsReply] = useState<boolean>(false)

    const handleReply = () => {
        setIsReply((prev) => !prev)
    }

    const [createAnswer] = useMutation<Pick<IMutation, 'createUseditemQuestionAnswer'>, IMutationCreateUseditemQuestionAnswerArgs>(CREATE_USED_ITEM_QUESTION_ANSWER, {
        refetchQueries : [
            {query : FETCH_USED_ITEM_QUESTION_ANSWERS , variables : {page : 1 , useditemQuestionId : question?._id }}
        ],
        onCompleted : () => {
            handleReply()
        }
    })

    const handleAnswer = useCallback((value : string) => {
        createAnswer({
            variables : {
                createUseditemQuestionAnswerInput : {
                    contents : value,
                },
                useditemQuestionId : question?._id
            }
        })
    }, [createAnswer, question?._id])

    const {data : answersData} = useQuery<Pick<IQuery, 'fetchUseditemQuestionAnswers'>, IQueryFetchUseditemQuestionAnswersArgs>(FETCH_USED_ITEM_QUESTION_ANSWERS, {
        variables : {
            page : 1,
            useditemQuestionId : question?._id
        }
    })


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
        <div style={{borderBottom : '1px solid lightgray', padding : '1rem 0'}}>
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
                <S.RowWrapper>
                    <S.ReplyBtn id={question?._id} onClick={handleReply}>
                        <i className="ri-question-answer-line"></i>
                    </S.ReplyBtn>
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
                </S.RowWrapper>
            </S.Question>
            <div>
                {
                    isReply && (
                        <ComboBox>
                            <S.ColWrapper>
                                <ComboBox.TextArea width={1000} placeholder='답글을 입력해주세요.' />
                                <ComboBox.Button handleSubmit={handleAnswer}>답글달기</ComboBox.Button>
                            </S.ColWrapper>
                        </ComboBox>
                    )
                }
            </div>
            <S.Answers>
                <Answers answersData={answersData}/>
            </S.Answers>
        </div>

    );
};


export default Question;