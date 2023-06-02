import React from 'react';
import { MarketListUIProps } from './MarketList.type';

import * as S from './MarketList.styles'
import BestItemImage from '../../../commons/profileImage';
import useMoney from '../../../../hook/useMoney';
const MarketListUI : React.FC<MarketListUIProps> = ({
    bestItemsList,
    itemsList
}) => {

    const countMoney = useMoney()
    return (
        <S.Container>
            <S.Best>
                <h2>베스트 상품</h2>
                <S.BestItemsWrapper>
                    {
                        bestItemsList?.fetchUseditemsOfTheBest.map((item) => (
                            <S.BestItem key={item._id}>
                                <BestItemImage url={item.images[0] ? item.images[0] : '/images/no-images.png'} isCircle={false} width={242} height={242}/>
                                <S.Name>{item?.name}</S.Name>
                                <S.Tag>{item.tags[0]}</S.Tag>
                                <S.ItemInfo>
                                    <S.Price>{countMoney(String(item?.price))}원</S.Price>
                                    <S.HeartBox>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z" fill="#FFD600"/>
                                        </svg>
                                        <div>
                                            {item?.pickedCount}
                                        </div>
                                    </S.HeartBox>
                                </S.ItemInfo>
                            </S.BestItem>
                        ))
                    }
                </S.BestItemsWrapper>
            </S.Best>

        </S.Container>
    );
};

export default MarketListUI;