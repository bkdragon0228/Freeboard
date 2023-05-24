import styled from "@emotion/styled"
import { Rate } from 'antd';

export const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
`

export const CommentWrapper = styled.div`
    position: relative;
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid #bdbdbd;
`

export const UserInfoWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 1rem;
    padding-bottom : 20px;
`

export const Avatar = styled.div`
    width: 48px;
    height: 48px;
    cursor: pointer;
`
export const Writer = styled.div``

export const Rating = styled(Rate)``

export const Content = styled.div`
    flex-basis: 100%;
    margin-left: 56px;
    margin-bottom: 16px;
`

export const OptionWrapper = styled.div`
    position: absolute;
    right: 10px;
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
`

export const UpdateIcon = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;
  border: none;
  background-color: transparent;
`
export const DeleteIcon = styled(UpdateIcon)``

export const ReplyIcon = styled(UpdateIcon)``

export const Date = styled.span`
    font-size: 12px;
    line-height: 17.76px;
    font-weight: 400;
    color: #bdbdbd;
    margin-left: 56px;
`

export const ReplyWrite = styled.div`
    position: relative;
    left: 62px;
    display : flex;
    margin-top : 20px;
    column-gap : 20px;
`