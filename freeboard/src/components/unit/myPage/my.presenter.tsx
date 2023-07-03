import React from 'react';
import { MYUIProps } from './my.type'

import * as S from './my.style'
import ProfileImage from '../../commons/profileImage';
import useMoney from '../../../hook/useMoney';
import { useRouter } from 'next/router';
import DataList from '../../commons/DataList/DataList';

const MYUI : React.FC<MYUIProps> = ({
    userData,
    pagePath
}) => {
    const getMoney = useMoney()
    const router = useRouter()
    console.log(router.pathname)
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
                <S.Point>
                    <i className="ri-wallet-3-fill"></i>
                    <div>{getMoney(String(userData?.fetchUserLoggedIn.userPoint.amount))}</div>
                </S.Point>
                <S.MyPageSections>
                    {
                        pagePath.map(({path, name}) => (
                            <S.SectionBtn
                                key={path}
                                isCurrent={router.pathname === path}
                                onClick={() => router.push(path)}
                            >
                                {name}
                            </S.SectionBtn>
                        ))
                    }
                </S.MyPageSections>
            </S.User>
            <S.Product>

            </S.Product>
        </S.Container>
    );
};

export default MYUI;