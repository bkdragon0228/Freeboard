import React from 'react';
import { FETCH_USED_ITEMS, FETCH_USED_ITEMS_OF_THE_BEST } from './MarketList.query';
import { useQuery } from '@apollo/client';

import MarketListUI from './MarketList.presenter';
import { IQuery, IQueryFetchUseditemsArgs } from '../../../../commons/types/generated/types';

const MarketList = () => {
    const {data : marketItems} = useQuery<Pick<IQuery, 'fetchUseditems'>, IQueryFetchUseditemsArgs>(FETCH_USED_ITEMS, {
        variables :{
            page : 1,
            isSoldout : false,
            search : ''
        }
    })

    const {data : bestItems} = useQuery<Pick<IQuery, 'fetchUseditemsOfTheBest'>>(FETCH_USED_ITEMS_OF_THE_BEST)

    console.log('best', bestItems)
    return (
        <MarketListUI
            itemsList={marketItems}
            bestItemsList={bestItems}
        />
    );
};

export default MarketList;