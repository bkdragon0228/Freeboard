import styled from "@emotion/styled";

export const Container = styled.div`
    width: 1096px;
    display: flex;
    flex-direction: column;
    border: 1px solid #bdbdbd;
`

export const InputWrapper = styled.div`
    border: 1px solid #f2f2f2;
`

export const RelplyInput = styled.input`
    width: 100%;
    height: 64px;
    padding: 20px 0 0 20px;
    border: none;
`

export const ReplyInfoWrapper = styled.div`
    width: 100%;
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ReplyInfo = styled.span`
    color: #bdbdbd;
`

export const ReflyButton = styled.button`
    width: 91px;
    height: 52px;
    padding: 14px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    background-color: #ffd600;
    border: none;
    cursor: pointer;

    &:hover {
        border: 1px solid black;
    }
`