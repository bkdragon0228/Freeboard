import React, { useEffect, useState } from 'react';

import { Basket } from './Basket.type';

import BasketUI from './Basket.presenter';

const Basket = () => {
    const [basketItems, setBasketItems] = useState<Basket[]>([]);

    useEffect(() => {
        const basketFromStorage = JSON.parse(localStorage.getItem("baskets") || "[]");
        setBasketItems(basketFromStorage);
    }, [])


    return (
        <BasketUI basketItems={basketItems}/>
    );
};

export default Basket;