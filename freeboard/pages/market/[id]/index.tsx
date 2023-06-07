import React from 'react';

import MarketItemDetail from '../../../src/components/unit/market/detail/MarketItemDetail.container';
import MarketCommentList from '../../../src/components/unit/marketComments/list/MarketCommentList.container';
import MarketCommentWrite from '../../../src/components/unit/marketComments/write/MarketCommentWrite.container';

const MarketItemDetailPage = () => {
    return (
        <>
            <MarketItemDetail />
            <MarketCommentWrite />
            <MarketCommentList />
        </>
    );
};

export default MarketItemDetailPage;