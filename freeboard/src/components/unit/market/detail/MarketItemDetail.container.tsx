import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { FETCH_USED_ITEM } from './MarketItemDetail.query';

import MarketItemDetailUI from './MarketItemDetail.presenter';
import { IQuery, IQueryFetchUseditemArgs } from '../../../../commons/types/generated/types';

const MarketItemDetail = () => {
    const router = useRouter()
    const {data : itemDetail} = useQuery<Pick<IQuery, 'fetchUseditem'>, IQueryFetchUseditemArgs>(FETCH_USED_ITEM, {
        variables : {
            useditemId : router.query.id as string
        }
    })

    return (
       <MarketItemDetailUI
         detailData={itemDetail}
       />
    );
};

export default MarketItemDetail;

