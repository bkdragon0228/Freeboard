import React from 'react';
import withAuth from '../../../src/hoc/withAuth';

import MarketWrite from '../../../src/components/unit/market/write/MarketWrite.container';

const MargetNewPage = () => {
    return (
       <MarketWrite />
    );
};

export default withAuth(MargetNewPage, true);