export interface Basket {
    name : string;
    seller : {
        _id : string;
        name : string;
    }
    _id : string;
}

export interface BasketUIProps {
    basketItems : Basket[]
}