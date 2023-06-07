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
    border-bottom : 1px solid black;
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