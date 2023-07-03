import React from 'react';
import { MYUIProps } from './my.type'

import * as S from './my.style'
import ProfileImage from '../../commons/profileImage';

const MYUI : React.FC<MYUIProps> = ({
    userData
}) => {

    console.log(userData.fetchUserLoggedIn.name)
    return (
        <S.Container>
            <S.User>
                <h2>MYPAGE</h2>
                <ProfileImage
                    url={userData?.fetchUserLoggedIn.picture ? `https://storage.googleapis.com/${userData?.fetchUserLoggedIn.picture}` : ''}
                    width={80}
                    height={80}
                />
                <h2>{userData?.fetchUserLoggedIn.name}</h2>
            </S.User>
            <S.Product></S.Product>
        </S.Container>
    );
};

export default MYUI;