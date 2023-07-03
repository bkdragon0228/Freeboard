import { IQuery } from "../../../../commons/types/generated/types";
import { Basket } from "../../basket/Basket.type";

export interface MarketItemDetailUIProps {
    detailData : Pick<IQuery, 'fetchUseditem'>
    handleClickBasket : (basket : Basket) => void;
    handleToggle : () => void;
}