import styled from "@emotion/styled"
import { Rate } from 'antd';


export const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    margin-bottom: 40px;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 14px;
    align-items: center;
    margin-bottom: 40px;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 20px;
`

export const Input = styled.input`
    width: 180px;
    height: 52px;
    padding-left: 20px;
    border: 1px solid lightgray;
    margin-right: 20px;
`
export const Title = styled.span`
    font-size: 18px;
    font-weight: 500;
    line-height: 26.64px;
`

export const StarPoint = styled(Rate)`
    margin-bottom: 20px;
`

export const ContentsWrapper = styled(Wrapper)`
    flex-direction: column;
    border: 1px solid lightgray;
`

export const Contents = styled.input`
    width: 100%;
    min-height: 108px;
    padding: 20px;
    padding-top: 0px;
    border: 1px solid lightgray;
`

export const ContentsStateWrapper = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid lightgray;
    border-top: none;
    padding-left: 16px;
    color : gray;
`

export const SubmitButton = styled.button`
    padding: 14px 16px;
    background-color: black;
    color : white;
    cursor: pointer;
`