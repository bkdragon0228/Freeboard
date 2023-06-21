import styled from "@emotion/styled";

export const Container = styled.div`
    margin: 80px auto;
    padding: 80px 100px;
    width: 1200px;
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`
export const Title = styled.div`
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 40px;
`
export const ColWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
`

export const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
`
export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`

export const Rabel = styled.div`
    font-size: 16px;
    font-weight: 600;
`

export const Input = styled.input`
    padding: 16px;
    width: 996px;
    height: 52px;
    border: 1px solid #bdbdbd;
`

export const Button = styled.button`
    width: 120px;
    padding: 20px;
    border: 1px solid lightgray;
    background-color: transparent;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
        background-color: darkgray;
    }
`
