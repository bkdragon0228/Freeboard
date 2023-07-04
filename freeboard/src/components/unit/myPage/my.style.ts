import styled from "@emotion/styled";

export const Product = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    align-items: center;
    padding : 32px 0 0 0;
`

export const Category = styled.div`
    display: flex;
    column-gap: 1rem;
`

export const Sold = styled.h3<{
    isSold : boolean;
}>`
    color : ${(props) => props.isSold ? 'black' : 'gray'};
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`

export const Pick = styled(Sold)`
    color : ${(props) => props.isSold ? 'gray' : 'black'};
`