import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { FETCH_USED_ITEM } from './MarketItemDetail.query';

import MarketItemDetailUI from './MarketItemDetail.presenter';
import { IQuery, IQueryFetchUseditemArgs } from '../../../../commons/types/generated/types';
import { Basket } from '../../basket/Basket.type';

const MarketItemDetail = () => {
    const router = useRouter()
    const {data : itemDetail} = useQuery<Pick<IQuery, 'fetchUseditem'>, IQueryFetchUseditemArgs>(FETCH_USED_ITEM, {
        variables : {
            useditemId : router.query.id as string
        }
    })

    const handleClickBasket = (basket: Basket) => {
        console.log(basket);

        const baskets: Basket[] =
          JSON.parse(localStorage.getItem("baskets") || "[]");

        const temp = baskets.filter((el) => el._id === basket._id);
        if (temp.length === 1) {
          alert("이미 담으신 물품입니다.")
          return;
        }

        baskets.push(basket);
        localStorage.setItem("baskets", JSON.stringify(baskets));
        alert('장바구니에 성공적으로 담았습니다.')

      };

    return (
       <MarketItemDetailUI
         detailData={itemDetail}
         handleClickBasket={handleClickBasket}
       />
    );
};

export default MarketItemDetail;

