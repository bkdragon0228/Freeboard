import React from 'react';
import { useRouter } from 'next/router';

import MarketItemDetailUI from './MarketItemDetail.presenter';

const MarketItemDetail = () => {
    const router = useRouter()

    console.log(router.query.id)
    return (
       <MarketItemDetailUI />
    );
};

export default MarketItemDetail;