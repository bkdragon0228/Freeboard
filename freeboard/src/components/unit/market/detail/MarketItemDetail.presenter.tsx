import React, { useCallback } from 'react';
import { MarketItemDetailUIProps } from './MarketItemDetail.types'
import { format } from 'date-fns'

import * as S from './MarketItemDetail.style'
import ProfileImage from '../../../commons/profileImage';
import useMoney from '../../../../hook/useMoney';
import Carousel from '../../../commons/Carousel';
import { Basket } from '../../basket/Basket.type';

const MarketItemDetailUI : React.FC<MarketItemDetailUIProps> = ({
    handleClickBasket,
    detailData
}) => {
    const getMoney = useMoney()
    const getCreatedDate = useCallback(() => {
        if(!detailData?.fetchUseditem.createdAt) return

        const result = format(new Date(detailData?.fetchUseditem.createdAt), 'yyyy.MM.dd')
        console.log(result)
        return result
    }, [format, detailData?.fetchUseditem.createdAt ])

    const carouselOption = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: (dots : any) => (
          <div
            style={{
                display : 'absolute',
                bottom : '10px',
                borderRadius: "10px",
                color: 'yellow'
            }}
          >
            <ul> {dots} </ul>
          </div>
        ),
        nextArrow: (
            <S.NextArrow>
                <i className="ri-arrow-right-line"></i>
            </S.NextArrow>
        ),
        prevArrow: (
            <S.PrevArrow>
               <i className="ri-arrow-left-line"></i>
            </S.PrevArrow>
        )
    }

    const onClickBasket = useCallback(() => {

        try {

            const item : Basket = {
                _id : detailData?.fetchUseditem._id,
                name : detailData?.fetchUseditem.name,
                seller : {
                    _id : detailData?.fetchUseditem.seller._id,
                    name : detailData?.fetchUseditem.seller.name
                }
            }

           handleClickBasket(item)


        } catch (error) {
            console.log(error)
        }


    }, [handleClickBasket, detailData])

    return (
        <S.Container>
            <S.SellerInfo>
                <ProfileImage url={detailData?.fetchUseditem.seller.picture ? `https://storage.googleapis.com/${detailData?.fetchUseditem.seller.picture}` : ''}/>
                <S.ColWrap>
                    <S.SellerName>{detailData?.fetchUseditem.seller.name}</S.SellerName>
                    <S.Created>{`Date : ${getCreatedDate()}`}</S.Created>
                </S.ColWrap>
                <div>
                    <S.BaketButton onClick={onClickBasket}>
                        <i className="ri-shopping-bag-line"></i>
                    </S.BaketButton>
                </div>
            </S.SellerInfo>
            <S.ItemInfo>
                <S.ItemTitle>
                    <S.ColWrap>
                        <S.ItemRemark>{detailData?.fetchUseditem.remarks}</S.ItemRemark>
                        <S.ItemName>{detailData?.fetchUseditem.name}</S.ItemName>
                    </S.ColWrap>
                    <S.ColWrap>
                        <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.9998 28.025L12.8248 26.045C5.09976 19.04 -0.000244141 14.42 -0.000244141 8.75C-0.000244141 4.13 3.62976 0.5 8.24975 0.5C10.8598 0.5 13.3648 1.715 14.9998 3.635C16.6348 1.715 19.1398 0.5 21.7498 0.5C26.3698 0.5 29.9998 4.13 29.9998 8.75C29.9998 14.42 24.8998 19.04 17.1748 26.06L14.9998 28.025Z" fill="#FFD600"/>
                        </svg>
                        <S.ItemPickCount>{detailData?.fetchUseditem.pickedCount}</S.ItemPickCount>
                    </S.ColWrap>
                </S.ItemTitle>
            </S.ItemInfo>
            <S.ItemPrice>{getMoney(String(detailData?.fetchUseditem.price))}원</S.ItemPrice>
            <Carousel images={detailData?.fetchUseditem.images.filter(e => e !== '').map((e) => `https://storage.googleapis.com/${e}`)} setting={carouselOption} />
            <S.Content>{detailData?.fetchUseditem.contents}</S.Content>
            <S.Tags>
                {
                    detailData?.fetchUseditem.tags.map((tag) => (
                        <S.Tag>#{tag}</S.Tag>
                    ))
                }
            </S.Tags>
        </S.Container>
    );
};

export default MarketItemDetailUI;