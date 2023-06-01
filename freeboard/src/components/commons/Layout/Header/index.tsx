import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { isOpenStateBySign } from '../../../../../state/isOpenState'
import styled from '@emotion/styled'
import Carousel from '../../Carousel'
import useUser from '../../../../hook/useUser'
import ProfileImage from '../../profileImage'
import Dropdown from '../../Dropdown'
import useLogout from '../../../../hook/useLogout'

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

//

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
    const setIsOpenRegister = useSetRecoilState(isOpenStateBySign('register'))
    const setIsOpenLogin= useSetRecoilState(isOpenStateBySign('login'))
    const logOut = useLogout()

    const {data : userData} = useUser()

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
            <Logo>
                <svg width="210" height="32" viewBox="0 0 210 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.32316 21.1043V18.6664V13.3335V9.68703V5.3329L14 0H11.0958H5.54788L2.77528 2.66774V13.3335L0 16.0013L2.77528 18.6664V29.3348L5.54788 32H11.0958H14L8.32316 26.6671V21.1043Z" fill="#FFD600"/>
                    <path d="M29.6768 10.8982V13.3335V18.6665V22.313V26.6671L24 32H26.9042H32.4521L35.2274 29.3348V18.6665L38 16.0013L35.2274 13.3335V2.66774L32.4521 0H26.9042H24L29.6768 5.3329V10.8982Z" fill="#FFD600"/>
                    <path d="M57.9702 21.2464C58.7238 21.2464 59.3091 21.0372 59.7236 20.6162C60.138 20.1953 60.339 19.609 60.3289 18.8549H65.3678C65.3678 20.7996 64.6896 22.3956 63.3357 23.6429C61.9792 24.8877 60.2335 25.5127 58.0984 25.5127C55.589 25.5127 53.6121 24.7043 52.1678 23.0851C50.7209 21.4684 50 19.2268 50 16.3628V16.133C50 14.3407 50.3215 12.7576 50.9646 11.3863C51.6076 10.015 52.5345 8.95874 53.7477 8.22273C54.961 7.48671 56.3953 7.11741 58.0531 7.11741C60.2963 7.11741 62.0772 7.75787 63.3959 9.03622C64.7147 10.3146 65.3728 12.0474 65.3728 14.2322H60.3339C60.3339 13.3154 60.1154 12.6104 59.6808 12.1172C59.2463 11.6239 58.661 11.3786 57.9275 11.3786C56.536 11.3786 55.7221 12.2902 55.4885 14.116C55.4131 14.6945 55.378 15.4925 55.378 16.51C55.378 18.292 55.5865 19.5264 56.0009 20.2159C56.4078 20.9029 57.066 21.2464 57.9702 21.2464Z" fill="black"/>
                    <path d="M67.4307 16.1485C67.4307 14.3769 67.7647 12.8016 68.4354 11.4199C69.1061 10.0383 70.0681 8.97427 71.3216 8.23051C72.575 7.48674 74.0495 7.11486 75.7375 7.11486C78.3197 7.11486 80.3568 7.9361 81.8438 9.58116C83.3309 11.2262 84.0769 13.4627 84.0769 16.2957V16.492C84.0769 19.2579 83.3309 21.4504 81.8363 23.0748C80.3417 24.6966 78.3197 25.5101 75.7701 25.5101C73.3135 25.5101 71.3417 24.7534 69.8546 23.2401C68.3676 21.7267 67.5638 19.6736 67.4457 17.0834L67.4307 16.1485ZM72.8036 16.492C72.8036 18.1319 73.0523 19.3327 73.5521 20.0998C74.052 20.8642 74.7905 21.2464 75.7676 21.2464C77.6817 21.2464 78.6588 19.733 78.7015 16.7063V16.1485C78.7015 12.9668 77.7118 11.3786 75.7349 11.3786C73.939 11.3786 72.9669 12.7499 72.8161 15.4925L72.8036 16.492Z" fill="black"/>
                    <path d="M85.825 16.1795C85.825 13.3697 86.4152 11.1565 87.5958 9.53982C88.7764 7.92316 90.4242 7.11225 92.5392 7.11225C94.0815 7.11225 95.3777 7.73464 96.4302 8.98199V0H101.821V25.1821H96.9903L96.719 23.2814C95.6138 24.7689 94.2096 25.5101 92.5091 25.5101C90.4569 25.5101 88.8317 24.7018 87.631 23.0825C86.4253 21.4633 85.825 19.1649 85.825 16.1795ZM91.1979 16.5255C91.1979 19.6736 92.0896 21.2464 93.8756 21.2464C95.0662 21.2464 95.9177 20.7324 96.4276 19.7046V12.9513C95.9378 11.9028 95.0989 11.3786 93.9082 11.3786C92.2504 11.3786 91.3511 12.755 91.213 15.5106L91.1979 16.5255Z" fill="black"/>
                    <path d="M112.695 25.5075C110.047 25.5075 107.904 24.6966 106.269 23.0722C104.631 21.4504 103.812 19.3379 103.812 16.7347V16.275C103.812 14.4595 104.139 12.8583 104.792 11.4715C105.445 10.0847 106.4 9.0104 107.653 8.25114C108.907 7.49188 110.396 7.11225 112.117 7.11225C114.541 7.11225 116.455 7.88442 117.857 9.43135C119.261 10.9783 119.961 13.1347 119.961 15.898V18.0466H109.278C109.469 19.0409 109.889 19.8234 110.537 20.3915C111.185 20.9597 112.024 21.2438 113.056 21.2438C114.757 21.2438 116.086 20.6317 117.043 19.4076L119.499 22.3904C118.829 23.3408 117.882 24.0974 116.653 24.6604C115.43 25.226 114.109 25.5075 112.695 25.5075ZM112.089 11.376C110.517 11.376 109.58 12.4477 109.283 14.5886H114.704V14.1625C114.724 13.2767 114.508 12.5923 114.051 12.1042C113.594 11.6187 112.941 11.376 112.089 11.376Z" fill="black"/>
                    <path d="M126.233 19.8105C127.027 19.8105 127.688 20.0765 128.215 20.6111C128.743 21.1456 129.004 21.8274 129.004 22.659C129.004 23.4906 128.74 24.1723 128.215 24.7069C127.688 25.2415 127.03 25.5075 126.233 25.5075C125.429 25.5075 124.766 25.2389 124.244 24.6992C123.721 24.1594 123.463 23.4802 123.463 22.659C123.463 21.8377 123.724 21.1585 124.244 20.6188C124.766 20.0816 125.429 19.8105 126.233 19.8105Z" fill="black"/>
                    <path d="M140.476 21.2464C141.229 21.2464 141.814 21.0372 142.229 20.6162C142.643 20.1953 142.844 19.6091 142.834 18.855H147.873C147.873 20.7996 147.195 22.3956 145.841 23.643C144.485 24.8877 142.739 25.5127 140.604 25.5127C138.094 25.5127 136.117 24.7044 134.673 23.0851C133.226 21.4685 132.505 19.2268 132.505 16.3628V16.133C132.505 14.3407 132.827 12.7577 133.47 11.3863C134.113 10.015 135.04 8.95877 136.253 8.22276C137.464 7.48416 138.901 7.11744 140.558 7.11744C142.802 7.11744 144.583 7.7579 145.901 9.03625C147.22 10.3146 147.878 12.0475 147.878 14.2323H142.839C142.839 13.3155 142.621 12.6104 142.186 12.1172C141.749 11.6265 141.166 11.3786 140.433 11.3786C139.041 11.3786 138.227 12.2902 137.994 14.1161C137.918 14.6945 137.883 15.4925 137.883 16.51C137.883 18.292 138.092 19.5264 138.506 20.216C138.913 20.9029 139.571 21.2464 140.476 21.2464Z" fill="black"/>
                    <path d="M160.131 25.1795C159.94 24.818 159.769 24.2885 159.621 23.5887C158.632 24.867 157.25 25.5075 155.477 25.5075C153.851 25.5075 152.467 25.0013 151.332 23.9916C150.194 22.9818 149.626 21.7112 149.626 20.1798C149.626 18.2558 150.317 16.8018 151.699 15.8179C153.08 14.834 155.09 14.3433 157.727 14.3433H159.385V13.4058C159.385 11.7685 158.699 10.9499 157.328 10.9499C156.052 10.9499 155.414 11.5981 155.414 12.8945H150.041C150.041 11.1823 150.749 9.79032 152.169 8.71857C153.588 7.64683 155.396 7.11225 157.597 7.11225C159.797 7.11225 161.535 7.66491 162.811 8.76764C164.087 9.87038 164.741 11.3863 164.773 13.3077V21.1611C164.793 22.7907 165.039 24.0355 165.507 24.898V25.1769H160.131V25.1795ZM156.765 21.5743C157.436 21.5743 157.991 21.4271 158.431 21.1327C158.873 20.8383 159.189 20.5052 159.38 20.1333V17.2951H157.818C155.946 17.2951 155.012 18.1577 155.012 19.8854C155.012 20.389 155.178 20.7944 155.507 21.1069C155.836 21.4168 156.255 21.5743 156.765 21.5743Z" fill="black"/>
                    <path d="M172.291 7.44284L172.467 9.52435C173.69 7.91802 175.333 7.11486 177.395 7.11486C179.576 7.11486 181.048 8.00583 181.811 9.78777C182.982 8.00583 184.67 7.11486 186.883 7.11486C190.379 7.11486 192.178 9.28934 192.273 13.6409V25.1822H186.883V13.9844C186.883 13.0779 186.735 12.4168 186.436 12.001C186.139 11.5852 185.597 11.3786 184.811 11.3786C183.748 11.3786 182.957 11.8641 182.434 12.8377L182.449 13.0676V25.1822H177.059V14.0153C177.059 13.0856 176.916 12.4142 176.629 11.9984C176.343 11.5826 175.795 11.376 174.987 11.376C173.954 11.376 173.168 11.8615 172.625 12.8351V25.1796H167.252V7.44284H172.291Z" fill="black"/>
                    <path d="M209.997 16.4429C209.997 19.1959 209.394 21.3962 208.189 23.0412C206.983 24.6863 205.353 25.5075 203.301 25.5075C201.716 25.5075 200.414 24.911 199.395 23.7204V32H194.022V7.44284H199.045L199.204 9.08274C200.236 7.77082 201.59 7.11486 203.27 7.11486C205.396 7.11486 207.048 7.92061 208.229 9.5321C209.41 11.1436 210 13.3594 210 16.1795V16.4429H209.997ZM204.624 16.0994C204.624 12.9513 203.733 11.3786 201.947 11.3786C200.671 11.3786 199.822 11.8486 199.395 12.7886V19.7718C199.862 20.7557 200.723 21.2464 201.977 21.2464C203.687 21.2464 204.572 19.7279 204.624 16.6882V16.0994Z" fill="black"/>
                </svg>
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
        <Carousel />
    </Wrapper>
  )
}
