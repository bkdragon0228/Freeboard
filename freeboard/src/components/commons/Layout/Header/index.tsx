import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { isOpenStateBySign } from '../../../../../state/isOpenState'
import styled from '@emotion/styled'
import Carousel from '../../Carousel'
import useUser from '../../../../hook/useUser'
import ProfileImage from '../../profileImage'
import Dropdown from '../../Dropdown'
import useLogout from '../../../../hook/useLogout'
import { useRouter } from 'next/router'

const Wrapper = styled.div`
    width : 100%;
`
const Header = styled.header`
    width : 1200px;
    margin : 0 auto;
    height : 152px;
    display : flex;
    justify-content: space-between;
`
const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 8px;
    font-size: 32px;
    font-weight: 700;
    cursor: pointer;

    & p {
        font-family: 'Grandiflora One', serif;
    }

    & i {
        color : #ffd600;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    column-gap: 1rem;
    justify-content: center;
    align-items: center;
`

const UserWrapper = styled.div`
    width: 125px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LoginButton = styled.button`
    width: 92px;
    height: 44px;
    padding : 10px 16px;
    background-color: transparent;
    color : black;
    border: none;

    &:hover {
        text-decoration: underline;
    }
`

const RegisterButton = styled(LoginButton)`
    background-color: #ffd600;
    border-radius : 10px;
`

const Profile = styled.div`
    width: 100%;
    border-bottom : 1px solid black;
    margin-bottom: 1rem;

`

const Item = styled.div`
    padding-left: 1rem;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    align-items: center;
    cursor: pointer;
`



export default function LayoutHeader() {
    const router = useRouter()
    const setIsOpenRegister = useSetRecoilState(isOpenStateBySign('register'))
    const setIsOpenLogin= useSetRecoilState(isOpenStateBySign('login'))
    const logOut = useLogout()

    const {data : userData} = useUser()

    const onClickLogo = () => {
        router.push('/')
    }

    const onClickRegister = () => {
        setIsOpenRegister(true)
    }

    const onClickLogin = () => {
        setIsOpenLogin(true)
    }

    console.log(`userData ${userData}`)

    const dropDownBody = (
        <div>
            <Profile>
                <Item>
                    <ProfileImage url={userData?.fetchUserLoggedIn.picture}/>
                    <p>{userData?.fetchUserLoggedIn.name}</p>
                </Item>
            </Profile>
            <Item onClick={() => logOut()}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 5L12.59 6.41L14.17 8H6V10H14.17L12.59 11.58L14 13L18 9L14 5ZM2 2H9V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H9V16H2V2Z" fill="#BDBDBD"/>
                </svg>
                <p>로그아웃</p>
            </Item>
        </div>
    )
  return (
    <Wrapper>
        <Header>
            <Logo onClick={onClickLogo}>
                <i className="ri-shirt-fill"></i>
                <p>
                    파자마
                </p>
            </Logo>
            {
                !userData ? (
                    <ButtonWrapper>
                        <LoginButton onClick={onClickLogin}>로그인</LoginButton>
                        <RegisterButton onClick={onClickRegister}>회원가입</RegisterButton>
                    </ButtonWrapper>
                )  : (
                    <UserWrapper>
                        <ProfileImage url={userData?.fetchUserLoggedIn.picture}/>
                        <Dropdown bodyContent={dropDownBody}>
                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.79241 7.97063C6.3921 8.49064 5.6079 8.49064 5.20759 7.97063L0.311169 1.60999C-0.195028 0.952425 0.273737 -2.46314e-07 1.10358 -1.73767e-07L10.8964 6.82351e-07C11.7263 7.54898e-07 12.195 0.952426 11.6888 1.61L6.79241 7.97063Z" fill="black"/>
                            </svg>
                        </Dropdown>
                    </UserWrapper>
                )
            }

        </Header>
        {/* <Carousel /> */}
    </Wrapper>
  )
}
