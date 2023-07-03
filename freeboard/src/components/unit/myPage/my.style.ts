import styled from "@emotion/styled";

export const Container = styled.div`
    width: 1600px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 600px 1000px;
`

export const User = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    align-items: center;
    padding : 32px 0 0 0;
`
export const Point = styled.div`
    display: flex;
    column-gap: 1rem;
    align-items: center;
`

export const MyPageSections = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`

export const SectionBtn = styled.button<{
    isCurrent : boolean;
}>`
    border: none;
    text-align: center;
    background-color: transparent;
    color : ${(props) => props.isCurrent ? '#FFD600' : 'black'};
    cursor: pointer;
`

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