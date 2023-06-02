import styled from '@emotion/styled'

export const Container = styled.div`
    padding-top : 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Best = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 40px;
`

export const BestItemsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 24px;
`

export const BestItem = styled.div`
    padding: 20px;
    width: 282px;
    height: 391px;
    background: #FFFFFF;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
export const Name = styled.div`
    font-size: 18px;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 4px;
`

export const Tag = styled.div`
    font-size: 12px;
    color : #4f4f4f;
`

export const ItemInfo = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Price = styled.div`
    margin-top: 12px;
    font-size: 18px;
`
export const HeartBox = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    align-items: center;
`