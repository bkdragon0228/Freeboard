import React from 'react';

import MarketItemDetail from '../../../src/components/unit/market/detail/MarketItemDetail.container';
import MarketCommentList from '../../../src/components/unit/marketComments/list/MarketCommentList.container';

const MarketItemDetailPage = () => {
    return (
        <>
            <MarketItemDetail />
            <MarketCommentList />
        </>
    );
};

export default MarketItemDetailPage;