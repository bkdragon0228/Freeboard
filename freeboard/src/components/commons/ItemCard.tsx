import React, { useMemo } from 'react';

import styled from '@emotion/styled';

import ItemImage from './profileImage'
import useMoney from '../../hook/useMoney';
import { IBoard, IUseditem } from '../../commons/types/generated/types';

interface ItemCardProps<T extends IBoard[] | IUseditem[]>{
    bestItems : T
}

const ItemCard = <T extends IBoard[] | IUseditem[]>({
    bestItems
} : ItemCardProps<T> ) => {
    const countMoney = useMoney()

    function isUsedItem(target: IBoard[] | IUseditem[]): target is IUseditem[]  {
        return (target as  IUseditem[])?.[0].price !== undefined;
    }

    console.log(bestItems)

    if(isUsedItem(bestItems)) {
        return (
            <BestItemsWrapper>
                {
                    bestItems?.map((item) => (
                        <BestItem key={item._id}>
                            <ItemImage url={item.images[0] ? `https://storage.googleapicom/${item.images[0]}` : '/images/no-imagepng'} isCircle={false} width={242} height={242}/>
                            <Name>{item?.name}</Name>
                            <Tag>{item.tags[0]}</Tag>
                            <ItemInfo>
                                <Price>{countMoney(String(item?.price))}원</Price>
                                <HeartBox>
                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z" fill="#FFD600"/>
                                    </svg>
                                    <div>
                                        {item?.pickedCount}
                                    </div>
                                </HeartBox>
                            </ItemInfo>
                        </BestItem>
                    ))
                }
            </BestItemsWrapper>
        )
    } else {
        return (
            <BestItemsWrapper>
                {
                    bestItems?.map((item) => (
                        <BestItem key={item._id}>
                            <ItemImage url={item.images[0] ? `https://storage.googleapis.com/${item.images[0]}` : '/images/no-imagepng'} isCircle={false} width={242} height={242}/>
                            <Name>{item?.title}</Name>
                            <div>{item?.contents?.substring(0, 12) + '...'}</div>
                            <ItemInfo>
                                <HeartBox>
                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z" fill="#FFD600"/>
                                    </svg>
                                </HeartBox>
                            </ItemInfo>
                        </BestItem>
                    ))
                }
         </BestItemsWrapper>
        )
    }
};

export default ItemCard;

const BestItemsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 24px;
`

const BestItem = styled.div`
    padding: 20px;
    width: 282px;
    height: 391px;
    background: #FFFFFF;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
const Name = styled.div`
    font-size: 18px;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 4px;
`

const Tag = styled.div`
    font-size: 12px;
    color : #4f4f4f;
`

const ItemInfo = styled.div`
    display: flex;
    justify-content: space-between;
`

const Price = styled.div`
    margin-top: 12px;
    font-size: 18px;
`
const HeartBox = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    align-items: center;
`
