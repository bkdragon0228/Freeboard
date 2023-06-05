import styled from '@emotion/styled'

export const Container = styled.div`
    padding-top : 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Best = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 40px;
    margin-bottom: 80px;
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

export const List = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`

export const Items = styled.div`
    width: 1200px;
    height: 1000px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 6px;
        height: 80px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background: #FFD600;
    }
    &::-webkit-scrollbar-track {
        background: #F2F2F2;
        border-radius: 4px;
    }
`

export const Item = styled.div`
    width: 100%;
    height: 200px;
    border-top: 1px solid #bdbdbd;
    padding : 20px 0;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
`

export const ItemName = styled.div`
    width: 100%;
    height: 36px;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 4px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

export const ItemTag = styled.div`
    width: 100%;
    height: 24px;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #4F4F4F;
    margin-bottom: 4px;
`

export const ItemRemarks = styled.div`
    color: #bdbdbd;
    margin-bottom: 24px;
`

export const ItemSellerInfo = styled.div`
    display: flex;
    align-items: center;
`

export const SellerName = styled.div`
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-left: 6px;
    margin-right: 22px;
`

export const ItemPrice = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
`

export const MiniTitles = styled.div`
    display: flex;
    column-gap: 1rem;
`

const MiniTitle = styled.button`
    width: 90px;
    font-size: 18px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`
export const SaleTitle = styled(MiniTitle)<{
    isShowSold : boolean
}>`
    color: ${(props) => props.isShowSold ? 'lightgray' : 'black'};
    border-bottom: ${(props) => props.isShowSold ? '' : '2px solid #FFD600'};
`

export const SoldTitle = styled(MiniTitle)<{
    isShowSold : boolean
}>`
    color: ${(props) => props.isShowSold ? 'black' : 'lightgray'};
    border-bottom: ${(props) => props.isShowSold ? '2px solid #FFD600' : ''};
`