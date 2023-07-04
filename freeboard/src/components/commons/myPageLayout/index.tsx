import React, { PropsWithChildren, useMemo } from 'react';
import { useRouter } from 'next/router';

import useUser from '../../../hook/useUser';
import useMoney from '../../../hook/useMoney';
import styled from '@emotion/styled';

import ProfileImage from '../profileImage';

const MyPageLayout : React.FC<PropsWithChildren<{}>> = ({
    children
}) => {
    const myPageSectionsPath = useMemo(() => [
        {
            path : '/user/my',
            name : '내 장터'
        },
        {
            path : '/user/my/point',
            name : '내 포인트'
        },
        {
            path : '/user/my/edit',
            name : '내 프로필'
        }
    ], [])
    const {data : userData} = useUser()
    const getMoney = useMoney()
    const router = useRouter()

    return (
            <Container>
            <User>
                <h2>MYPAGE</h2>
                <ProfileImage
                    url={userData?.fetchUserLoggedIn.picture ? `https://storage.googleapicom/${userData?.fetchUserLoggedIn.picture}` : ''}
                    width={80}
                    height={80}
                />
                <h2>{userData?.fetchUserLoggedIn.name}</h2>
                <Point>
                    <i className="ri-wallet-3-fill"></i>
                    <div>{getMoney(String(userData?.fetchUserLoggedIn.userPoint.amount))}</div>
                </Point>
                <MyPageSections>
                    {
                        myPageSectionsPath.map(({path, name}, i) => (
                            <SectionBtn
                                key={i}
                                isCurrent={router.pathname === path}
                                onClick={() => router.push(path)}
                            >
                                {name}
                            </SectionBtn>
                        ))
                    }
                </MyPageSections>
            </User>
            <div>
                {children}
            </div>
        </Container>
    );
};

export default MyPageLayout

const Container = styled.div`
    width: 1600px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 600px 1000px;
`

const User = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    align-items: center;
    padding : 32px 0 0 0;
`
const Point = styled.div`
    display: flex;
    column-gap: 1rem;
    align-items: center;
`

const MyPageSections = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`

const SectionBtn = styled.button<{
    isCurrent : boolean;
}>`
    border: none;
    text-align: center;
    background-color: transparent;
    color : ${(props) => props.isCurrent ? '#FFD600' : 'black'};
    cursor: pointer;
`