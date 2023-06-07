import React from 'react';

import withAuth from '../../src/hoc/withAuth';
import Basket from '../../src/components/unit/basket/Basket.container';

const BasketPage = () => {
    return (
        <Basket />
    );
};

export default withAuth(BasketPage, null);