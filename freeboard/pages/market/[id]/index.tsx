import React from 'react';

import MarketItemDetail from '../../../src/components/unit/market/detail/MarketItemDetail.container';
import MarketCommentList from '../../../src/components/unit/marketComments/list/MarketCommentList.container';
import MarketCommnetWrite from '../../../src/components/unit/marketComments/write/MarketCommnetWrite.container';

const MarketItemDetailPage = () => {
    return (
        <>
            <MarketItemDetail />
            <MarketCommnetWrite />
            <MarketCommentList />
        </>
    );
};

export default MarketItemDetailPage;