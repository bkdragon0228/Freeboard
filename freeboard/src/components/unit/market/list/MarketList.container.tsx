import React, { useCallback, useState } from 'react';
import { FETCH_USED_ITEMS, FETCH_USED_ITEMS_OF_THE_BEST } from './MarketList.query';
import { useQuery } from '@apollo/client';

import MarketListUI from './MarketList.presenter';
import { IQuery, IQueryFetchUseditemsArgs } from '../../../../commons/types/generated/types';

const MarketList = () => {
    const [isSearchSoldItem, setIsSearchSoldItem] = useState<boolean>(false)

    const {data : marketItems, fetchMore : fetchMarketItemMore, refetch : marketItemsRefetch} = useQuery<Pick<IQuery, 'fetchUseditems'>, IQueryFetchUseditemsArgs>(FETCH_USED_ITEMS, {
        variables :{
            page : 1,
            isSoldout : isSearchSoldItem,
            search : ''
        }
    })



    const {data : bestItems} = useQuery<Pick<IQuery, 'fetchUseditemsOfTheBest'>>(FETCH_USED_ITEMS_OF_THE_BEST)

    console.log('marketItems', marketItems)

    const itemListfetchMore = () => {
        if(!marketItems?.fetchUseditems.length) return

        fetchMarketItemMore({
            variables : {
                page : Math.ceil(marketItems?.fetchUseditems.length / 10) + 1,
            },
            updateQuery : (prev, {fetchMoreResult}) =>  {
                if(!fetchMoreResult.fetchUseditems) {
                    return {
                        fetchUseditems : [...prev.fetchUseditems]
                    }
                }

                return {
                    fetchUseditems : [...prev.fetchUseditems, ...fetchMoreResult.fetchUseditems]
                }
            }

        })
    }


    return (
        <MarketListUI
            itemsList={marketItems}
            itemsListRefetch={marketItemsRefetch}
            itemListfetchMore={itemListfetchMore}
            bestItemsList={bestItems}
            isSoldout={isSearchSoldItem}
            setIsSoldout={setIsSearchSoldItem}
        />
    );
};

export default MarketList;