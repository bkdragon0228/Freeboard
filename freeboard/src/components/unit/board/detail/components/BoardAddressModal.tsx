import React from 'react';
import { BoardAddressModalProps } from '../BoardDetail.type'


import * as S from '../BoardDetail.styles'


const BoardAddressModal : React.FC<BoardAddressModalProps> = ({
    address,
    isOpen
}) => {

    if(!isOpen) {
        return null
    }

    return (
        <S.AddressModal>
            {address ? (
                    <>
                        <span>{address?.zipcode}</span>
                        <span>{address?.address}</span>
                    </>
                ) : (
                    <div>
                        등록된 주소가 없습니다.
                    </div>
                )
            }
        </S.AddressModal>
    );
};

export default BoardAddressModal;