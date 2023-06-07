import styled from "@emotion/styled";

export const Container = styled.div`
    width: 800px;
    margin: 0 auto;
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    border-bottom: 1px solid black;
`

export const SellerInfo = styled.div`
    display: flex;
    column-gap: 1rem;
    padding-bottom: 22px;
    border: none;
    border-bottom: 1px solid black;
`

export const SellerName = styled.h2`
    font-size: 16px;
`

export const ColWrap = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    align-items: center;
`

export const Created = styled.div`
    color : gray;
    font-size: 12px;
`

export const ItemInfo = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`

export const ItemTitle = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ItemRemark = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #BDBDBD;
`

export const ItemName = styled.div`
    font-weight: 700;
    font-size: 24px;
`

export const ItemPickCount = styled.div`
`

export const ItemPrice = styled.div`
    font-size: 32px;
    font-weight: 700;
`
export const NextArrow = styled.div`
    position: absolute;
    right: 3%;
    z-index: 100;
`

export const PrevArrow = styled.div`
    position: absolute;
    left: 3%;
    z-index: 100;
`

export const Content = styled.div`
`

export const Tags = styled.div`
    display: flex;
    column-gap: 1.2rem;
`

export const Tag = styled.div`
    color: lightgray;
    font-size: 14px;
`

export const BaketButton = styled.button`
    width: 100px;
    border: none;
    cursor: pointer;
    background-color: white;
    color : black;
    font-size: 20px;
`