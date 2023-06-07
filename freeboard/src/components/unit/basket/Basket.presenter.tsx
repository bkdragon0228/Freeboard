import React from 'react';
import { BasketUIProps } from './Basket.type';

import * as S from './Basket.style'

const BasketUI : React.FC<BasketUIProps> = ({
    basketItems
}) => {
    return (
        <div>
            {
                basketItems.map((item) => (
                    <div>
                        {item.name}
                    </div>
                ))
            }
        </div>
    );
};

export default BasketUI;