import React from 'react'
import * as S from "./BoardComment.styled"
import { BoardCommentUIprops } from './BoardComment.type'


export default function BoardCommentUI({
    register,
    handleSubmit,
    onSubmit,
    setStar,
    star,
    defaultElement,
    isEdit,
    setIsEdit
} : BoardCommentUIprops
) {
    return (
        <S.Container>
            <form onSubmit={handleSubmit(({writer, comment, password, rating = star }) => onSubmit({writer, comment, password, rating }))}>
                <S.Wrapper>
                    {
                        !isEdit && (
                            <>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H3.17L2.58 14.59L2 15.17V2H18V14ZM8.5 12H16V10H10.5L8.5 12ZM12.36 6.13C12.56 5.93 12.56 5.62 12.36 5.42L10.59 3.65C10.39 3.45 10.08 3.45 9.88 3.65L4 9.53V12H6.47L12.36 6.13Z" fill="#FFD600"/>
                                </svg>
                                <S.Title>
                                    댓글
                                </S.Title>
                            </>
                        )
                    }
                    {isEdit && <button onClick={() => setIsEdit(false)} style={{border : 'none'}}>{'수정 취소'}</button>}
                </S.Wrapper>
                {/* 작성자, 비밀번호 */}
                <S.InputWrapper>
                    <S.Input
                        type='text'
                        defaultValue={defaultElement?.writer}
                        placeholder='작성자'
                        readOnly={!!defaultElement?.writer}
                        {...register("writer", {required  : "this is required",})}
                    />
                    <S.Input
                        type='password'
                        placeholder='비밀번호'
                        {...register('password', {required : 'this is required'})}
                    />
                </S.InputWrapper>
                {/* 별점 */}
                <S.StarPoint value={star} onChange={(number) => setStar(number)} />
                {/* 내용 */}
                <S.ContentsWrapper>
                    <S.Contents
                        maxLength={100}
                        defaultValue={defaultElement?.contents}
                        placeholder='개인정보를 공유 및 요청하거나, 명예 회손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'
                        type="text"
                        {...register('comment', {required : "This is required"})}
                    />
                    <S.ContentsStateWrapper>
                        <span>{'0'}/100</span>
                        <S.SubmitButton type='submit'>{isEdit ? '수정하기' : '등록하기'}</S.SubmitButton>
                    </S.ContentsStateWrapper>
                </S.ContentsWrapper>
            </form>
        </S.Container>
    )
}
