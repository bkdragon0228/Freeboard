import React, { useEffect, useState } from 'react';
import { BoardUserInfoProps } from '../BoardDetail.type'

import * as S from '../BoardDetail.styles'
import BoardAddressModal from './BoardAddressModal';

const BoardUserInfo : React.FC<BoardUserInfoProps> = ({
    username,
    address,
    createdAt,
}) => {
    const [isShowModal, setIsShowModal] = useState<boolean>(false)

    useEffect(() => {
        const listener = (boolean : boolean) => {
          setIsShowModal(boolean);
        }
        const a = document.querySelector('.AddressIcon');
        a.addEventListener('mouseover', () => listener(true))
        a.addEventListener('mouseout', () => listener(false))

        return () => {
          a.removeEventListener('mouseover', () => listener(true))
          a.removeEventListener('mouseout', () => listener(false))
        }
      }, [])

    return (
        <S.UserInfoWrapper>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.0001 0.666656C11.1201 0.666656 0.666748 11.12 0.666748 24C0.666748 36.88 11.1201 47.3333 24.0001 47.3333C36.8801 47.3333 47.3334 36.88 47.3334 24C47.3334 11.12 36.8801 0.666656 24.0001 0.666656ZM24.0001 7.66666C27.8734 7.66666 31.0001 10.7933 31.0001 14.6667C31.0001 18.54 27.8734 21.6667 24.0001 21.6667C20.1267 21.6667 17.0001 18.54 17.0001 14.6667C17.0001 10.7933 20.1267 7.66666 24.0001 7.66666ZM24.0001 40.8C18.1667 40.8 13.0101 37.8133 10.0001 33.2867C10.0701 28.6433 19.3334 26.1 24.0001 26.1C28.6434 26.1 37.9301 28.6433 38.0001 33.2867C34.9901 37.8133 29.8334 40.8 24.0001 40.8Z"
              fill="#BDBDBD"
            />
          </svg>
          <div style={{ position: "relative" }}>
            <S.Writer>{username}</S.Writer>
            <S.CreateDate>
              Date : {createdAt}
            </S.CreateDate>
          </div>
          <S.UserButtonContainer>
            <S.UserButton>
              <svg
                width="28"
                height="14"
                viewBox="0 0 28 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.6666 0.333328H15.3333V2.99999H20.6666C22.8666 2.99999 24.6666 4.79999 24.6666 6.99999C24.6666 9.19999 22.8666 11 20.6666 11H15.3333V13.6667H20.6666C24.3466 13.6667 27.3333 10.68 27.3333 6.99999C27.3333 3.31999 24.3466 0.333328 20.6666 0.333328ZM12.6666 11H7.33329C5.13329 11 3.33329 9.19999 3.33329 6.99999C3.33329 4.79999 5.13329 2.99999 7.33329 2.99999H12.6666V0.333328H7.33329C3.65329 0.333328 0.666626 3.31999 0.666626 6.99999C0.666626 10.68 3.65329 13.6667 7.33329 13.6667H12.6666V11ZM8.66663 5.66666H19.3333V8.33333H8.66663V5.66666Z"
                  fill="#FFD600"
                />
              </svg>
            </S.UserButton>
              <S.AddressIcon className="AddressIcon"/>
          </S.UserButtonContainer>

          <BoardAddressModal
            address={address}
            isOpen={isShowModal}
          />

        </S.UserInfoWrapper>
    );
};

export default BoardUserInfo;