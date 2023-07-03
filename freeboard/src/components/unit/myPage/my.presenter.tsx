import React from 'react';
import { MYUIProps } from './my.type'

import * as S from './my.style'
import ProfileImage from '../../commons/profileImage';
import useMoney from '../../../hook/useMoney';
import { useRouter } from 'next/router';
import DataList from '../../commons/DataList/DataList';
import { IQuery } from '../../../commons/types/generated/types';
import ComboBox from '../../commons/comboBox/ComboBox';

const MYUI : React.FC<MYUIProps> = ({
    userData,
    pagePath,
    useditemsIsoldData,
    lastPage,
    page,
    searchTerm,
    setSearchTerm,
    setPage,
    refetchUseditemIsold
}) => {
    const getMoney = useMoney()
    const router = useRouter()

    const onClickButton = (value : string) => {
        setSearchTerm(value)
        refetchUseditemIsold({
            search : value
        })
    }
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
                <div style={{
                    width : '100%',
                    display : 'flex',
                    justifyContent : 'space-between'
                }}>
                    <h2>나의 상품</h2>
                    <ComboBox>
                        <ComboBox.Input />
                        <ComboBox.Button
                            handleSubmit={onClickButton}
                        />
                    </ComboBox>
                </div>
                <DataList
                    data={useditemsIsoldData}
                    lastPage={lastPage}
                    page={page}
                    setPage={setPage}
                    refetchData={refetchUseditemIsold}
                    searchTerm={searchTerm}
                />
            </S.Product>
        </S.Container>
    );
};

export default MYUI;