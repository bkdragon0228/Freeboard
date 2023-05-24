import React from 'react'
import * as S from "./ReplyWrite.styles"

export default function ReplyWriteUI({
    handleRelply
} : {
    handleRelply : React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <S.Container>
        <S.InputWrapper>
            <S.RelplyInput placeholder='답글을 등록해주세요.' onChange={handleRelply} />
        </S.InputWrapper>
        <S.ReplyInfoWrapper>
            <S.ReplyInfo>0/100</S.ReplyInfo>
            <S.ReflyButton>답글등록</S.ReflyButton>
        </S.ReplyInfoWrapper>
    </S.Container>
  )
}
