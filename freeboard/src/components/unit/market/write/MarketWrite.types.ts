import { Address } from "react-daum-postcode";
import { IMutation } from "../../../../commons/types/generated/types";
import { UseFormRegister, FormState } from 'react-hook-form'
export type TCreateUsedItem = Pick<IMutation, 'createUseditem'>

export interface MarketItemForm {
    title : string;
    summary? : string;
    tags? : string;
    contents : string;
    price : string;
    zipcode : string;
    address : string;
    addressDetail : string;
}

export interface AddressGeo {
    lat : number;
    lon : number;
}

export interface MarketWriteUIProps {
    images : string[];
    onChangeImages : (url : string, index : number) => void;
    onChangeContents : (value : string) => void;
    handleComplete : (data : Address) => void;
    handleSubmit : (data : MarketItemForm) => void;
    register : UseFormRegister<MarketItemForm>;
    formState : FormState<MarketItemForm>;
    addressInfo : AddressGeo;
    isOpen : boolean;
    setIsOpen : React.Dispatch<React.SetStateAction<boolean>>;
}