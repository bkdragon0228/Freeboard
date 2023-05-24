import React, { useState } from 'react'

import * as S from "./BoardCommentList.styles"
import ReplyWrite from '../../reply/write/ReplyWrite.container';
import InfiniteScroll from 'react-infinite-scroller';
import BoardComment from '../write/BoardComment.container';

import { useRecoilState } from "recoil"
import { showReplyStateByKey } from "../../../../../state/showReplyState"
import { BoardCommentListUIprops, BoardCommentDetailProps } from './BoardCommnetList.type'

export default function BoardCommentListUI({
    data,
    handleClickDelete,
    handleFetchBoardMore
}: BoardCommentListUIprops) {

  return (
    <S.Container>
        <InfiniteScroll
           pageStart={0}
           loadMore={handleFetchBoardMore}
           hasMore={true}
        >
            {data?.fetchBoardComments.map((comment) => (
                // 이벤트 버블링 : 부모에 event도 같이 실행되는, 최상단 부모에만 이벤트 주고, currentTarget 쓰기
                <div
                    key={comment._id}
                    id={comment.writer}
                >
                    <CommentDetail
                        comment={comment}
                        handleClickDelete={handleClickDelete}
                    />
                </div>

            ))}
        </InfiniteScroll>

    </S.Container>
  )
}

// 개별 상태 관리를 위한 컴포넌트 분리
function CommentDetail({
    comment,
    handleClickDelete,
  } : BoardCommentDetailProps) {
    const [isShowReplyStateByKey ,setShowReplyStateByKey] = useRecoilState(showReplyStateByKey(comment._id))
    const [isEdit, setIsEdit] = useState<boolean>(false)

    const onClickUpdate = () => {
        setIsEdit((prev) => !prev)
    }

    return (
        <>
            {
                !isEdit &&
                <S.CommentWrapper key={comment._id}>
                    <S.UserInfoWrapper>
                        <S.Avatar>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 6C23.32 6 26 8.68 26 12C26 15.32 23.32 18 20 18C16.68 18 14 15.32 14 12C14 8.68 16.68 6 20 6ZM20 34.4C15 34.4 10.58 31.84 8 27.96C8.06 23.98 16 21.8 20 21.8C23.98 21.8 31.94 23.98 32 27.96C29.42 31.84 25 34.4 20 34.4Z" fill="#BDBDBD"/>
                            </svg>
                        </S.Avatar>
                        <S.Writer>
                            {comment.writer}
                        </S.Writer>
                        <S.Rating value={comment.rating} disabled>
                            평점 : {comment.rating}
                        </S.Rating>
                        <S.OptionWrapper>
                            <S.ReplyIcon onClick={() => setShowReplyStateByKey((prev) => !prev)}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 4H17V13H4V15C4 15.55 4.45 16 5 16H16L20 20V5C20 4.45 19.55 4 19 4ZM15 10V1C15 0.45 14.55 0 14 0H1C0.45 0 0 0.45 0 1V15L4 11H14C14.55 11 15 10.55 15 10Z" fill="#BDBDBD"/>
                                </svg>
                            </S.ReplyIcon>
                            <S.UpdateIcon onClick={onClickUpdate}>
                                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.06 6.02L11.98 6.94L2.92 16H2V15.08L11.06 6.02ZM14.66 0C14.41 0 14.15 0.1 13.96 0.29L12.13 2.12L15.88 5.87L17.71 4.04C18.1 3.65 18.1 3.02 17.71 2.63L15.37 0.29C15.17 0.09 14.92 0 14.66 0ZM11.06 3.19L0 14.25V18H3.75L14.81 6.94L11.06 3.19Z" fill="#BDBDBD"/>
                                </svg>
                            </S.UpdateIcon>
                            <S.DeleteIcon id={comment._id} onClick={handleClickDelete}>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#BDBDBD"/>
                                </svg>
                            </S.DeleteIcon>
                        </S.OptionWrapper>
                        <S.Content>
                            {comment.contents}
                        </S.Content>
                    </S.UserInfoWrapper>
                    <S.Date>
                        {comment.createdAt.split("").splice(0, 10)}
                    </S.Date>
                    {
                        isShowReplyStateByKey &&
                        <S.ReplyWrite style={{display : 'flex', marginTop : "20px", columnGap : '20px'}}>
                            <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 11L9 17L7.58 15.58L11.17 12H0V0H2V10H11.17L7.58 6.42L9 5L15 11Z" fill="black"/>
                            </svg>
                            <ReplyWrite />
                        </S.ReplyWrite>
                    }
                </S.CommentWrapper>
            }

            {
                isEdit &&
                    <BoardComment isEdit={true} setIsEdit={setIsEdit} defaultElement={comment}/>
            }
        </>
    )
}