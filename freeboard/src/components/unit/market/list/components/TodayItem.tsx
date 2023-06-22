import React, { useEffect, useState } from 'react';
import { Items} from '../MarketList.type'

import styled from '@emotion/styled';

const TodayItems = () => {
    const [items, setItems] = useState<Items>(null)

    useEffect(() => {
        const todayItems: Items = JSON.parse(localStorage.getItem('todayItems'))

        if(!todayItems.length) return

        setItems(todayItems)
    }, [])

    console.log(items)
    return (
        <div>
            <h2>오늘 본 상품</h2>
        </div>
    );
};

export default TodayItems;