import React from 'react';
import { MYUIProps } from './my.type'

import * as S from './my.style'
import DataList from '../../commons/DataList/DataList';
import ComboBox from '../../commons/comboBox/ComboBox';

const MYUI : React.FC<MYUIProps> = ({
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
    );
};

export default MYUI;