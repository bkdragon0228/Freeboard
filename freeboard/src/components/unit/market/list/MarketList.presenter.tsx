import React, { useState } from 'react';
import { MarketListUIProps } from './MarketList.type';

import useMoney from '../../../../hook/useMoney';

import * as S from './MarketList.styles'
import ItemImage from '../../../commons/profileImage';
import InfiniteScroll from 'react-infinite-scroller';
import SearchBarTriggerdByButton from '../../../commons/searchBar/SearchBarTriggerByButton';


const MarketListUI : React.FC<MarketListUIProps> = ({
    bestItemsList,
    itemsList,
    itemsListRefetch,
    itemListfetchMore,
    isSoldout,
    setIsSoldout
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
                                <ItemImage url={item.images[0] ? `https://storage.googleapis.com/${item.images[0]}` : '/images/no-images.png'} isCircle={false} width={242} height={242}/>
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
            <S.List>

                <S.MiniTitles>
                    <S.SaleTitle isShowSold={isSoldout} onClick={() => setIsSoldout(false)}>판매중상품</S.SaleTitle>
                    <S.SoldTitle isShowSold={isSoldout} onClick={() => setIsSoldout(true)}>판매된상품</S.SoldTitle>
                </S.MiniTitles>
                <SearchBarTriggerdByButton refetch={itemsListRefetch} />
                <S.Items>

                    <InfiniteScroll
                        pageStart={0}
                        loadMore={itemListfetchMore}
                        hasMore={true}
                        useWindow={false}
                    >
                        {
                            !itemsList?.fetchUseditems.length && <h2>찾으시는 상품이 없습니다.</h2>
                        }
                        {
                            itemsList?.fetchUseditems.map((item) => (
                                <S.Item key={item?._id}>
                                    <div>
                                        <ItemImage url={item.images[0] ? `https://storage.googleapis.com/${item.images[0]}` : '/images/no-images.png'} isCircle={false} width={160} height={160}/>
                                    </div>
                                    <div>
                                        <S.ItemName>
                                            {item?.name}
                                        </S.ItemName>
                                        <S.ItemTag>
                                            {item?.tags[0] || '일반'}
                                        </S.ItemTag>
                                        <S.ItemRemarks>
                                            {item?.remarks}
                                        </S.ItemRemarks>
                                        <S.ItemSellerInfo>
                                            <ItemImage url={`https://storage.googleapis.com/${item?.seller?.picture}`} width={20} height={20}/>
                                            <S.SellerName>
                                                {item?.seller?.name}
                                            </S.SellerName>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z" fill="#FFD600"/>
                                            </svg>
                                            <div>
                                                {item?.pickedCount}
                                            </div>
                                        </S.ItemSellerInfo>
                                    </div>
                                    <S.ItemPrice>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 15.5C9.49 15.5 7.32 14.08 6.24 12H12V10H5.58C5.53 9.67 5.5 9.34 5.5 9C5.5 8.66 5.53 8.33 5.58 8H12V6H6.24C7.32 3.92 9.5 2.5 12 2.5C13.61 2.5 15.09 3.09 16.23 4.07L18 2.3C16.41 0.87 14.3 0 12 0C8.08 0 4.76 2.51 3.52 6H0V8H3.06C3.02 8.33 3 8.66 3 9C3 9.34 3.02 9.67 3.06 10H0V12H3.52C4.76 15.49 8.08 18 12 18C14.31 18 16.41 17.13 18 15.7L16.22 13.93C15.09 14.91 13.62 15.5 12 15.5Z" fill="#FFD600"/>
                                        </svg>
                                        {countMoney(String(item?.price))}원
                                    </S.ItemPrice>
                                </S.Item>
                            ))
                        }
                    </InfiniteScroll>

                </S.Items>
            </S.List>

        </S.Container>
    );
};

export default MarketListUI;