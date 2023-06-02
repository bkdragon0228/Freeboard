import React from 'react';

import withAuth from '../../src/hoc/withAuth';
import MarketList from '../../src/components/unit/market/list/MarketList.container';

const MargetIndexPage = () => {
    return (
        <MarketList />
    );
};

export default withAuth(MargetIndexPage, null);