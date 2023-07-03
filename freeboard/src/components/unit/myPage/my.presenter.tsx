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
    refetchUseditemIsold,
    handleItemCate,
    isSoldItem,
    pickedUseditemData,
    refetchUseditemPicked,
}) => {
    const getMoney = useMoney()
    const router = useRouter()

    const onClickButton = (value : string) => {
        setSearchTerm(value)

        if(isSoldItem) {
            refetchUseditemIsold({
                search : value
            })
        } else {
            refetchUseditemPicked({
                search : value
            })
        }

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
                        pagePath.map(({path, name}, i) => (
                            <S.SectionBtn
                                key={i}
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
                    <S.Category>
                        <S.Sold
                            isSold={isSoldItem}
                            onClick={() => handleItemCate(true)}
                        >
                            나의 상품
                        </S.Sold>
                        <S.Pick
                            isSold={isSoldItem}
                            onClick={() => handleItemCate(false)}
                        >
                            마이찜
                        </S.Pick>
                    </S.Category>
                    <ComboBox>
                        <ComboBox.Input />
                        <ComboBox.Button
                            handleSubmit={onClickButton}
                        />
                    </ComboBox>
                </div>
                {
                    isSoldItem ? (
                        <DataList
                            data={useditemsIsoldData}
                            lastPage={lastPage}
                            page={page}
                            setPage={setPage}
                            refetchData={refetchUseditemIsold}
                            searchTerm={searchTerm}
                        />
                    ) : (
                        <DataList
                            data={pickedUseditemData}
                            lastPage={lastPage}
                            page={page}
                            setPage={setPage}
                            refetchData={refetchUseditemPicked}
                            searchTerm={searchTerm}
                        />
                    )
                }
            </S.Product>
        </S.Container>
    );
};

export default MYUI;