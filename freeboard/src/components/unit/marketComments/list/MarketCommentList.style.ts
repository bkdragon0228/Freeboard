import styled from '@emotion/styled'

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
`

export const Questions = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const Question = styled.div`
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom : 1px solid lightgray;
`

export const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
`

export const ColWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: .5rem;
`

export const Name = styled.div`
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
`

export const Date = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #BDBDBD;
`

export const DeleteBtn = styled.button`
    font-size: 18px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`

export const EditBtn = styled.button`
    font-size: 18px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`

export const ReplyBtn = styled.button`
    font-size: 18px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`