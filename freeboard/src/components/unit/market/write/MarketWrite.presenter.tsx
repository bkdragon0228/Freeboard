import React from 'react';
import dynamic from 'next/dynamic'
import { MarketWriteUIProps, MarketItemForm } from './MarketWrite.types'
import { Modal } from 'antd'

import * as S from './MarketWrite.style'
import 'react-quill/dist/quill.snow.css';

import Input from '../../../commons/Input';
import AddressSearch from '../../../commons/Address';
import Map from '../../../commons/kakaoMap';
import UploadImage from '../../../commons/upload/UploadImage';

const ReactQuill = dynamic(() =>  import('react-quill'), {ssr : false})

const MarketWriteUI : React.FC<MarketWriteUIProps> = ({
    formState,
    handleComplete,
    handleSubmit,
    onSubmit,
    images,
    onChangeContents,
    onChangeImages,
    register,
    addressInfo,
    isOpen,
    setIsOpen
}) => {
    return (
        <S.Container>
            <S.Title>상품 등록하기</S.Title>
            <S.ColWrapper>
                <S.Rabel>상품명</S.Rabel>
                <Input<MarketItemForm>
                    type='text'
                    placeholder='상품명을 작성해주세요.'
                    name={'title'}
                    formState={formState}
                    register={register}
                />
            </S.ColWrapper>
            <S.ColWrapper>
                <S.Rabel>한줄요약</S.Rabel>
                <Input<MarketItemForm>
                    type='text'
                    placeholder='한줄요약을 작성해주세요.'
                    name={'summary'}
                    formState={formState}
                    register={register}
                />
            </S.ColWrapper>
            <S.ColWrapper>
                <S.Rabel>상품설명</S.Rabel>
                <ReactQuill
                    style={{
                        height : '300px'
                    }}
                    onChange={onChangeContents}
                />
            </S.ColWrapper>
            <S.ColWrapper>
                <S.Rabel>판매 가격</S.Rabel>
                <Input<MarketItemForm>
                    type='text'
                    placeholder='판매 가격을 입력해주세요.'
                    name={'price'}
                    formState={formState}
                    register={register}
                />
            </S.ColWrapper>
            <S.ColWrapper>
                <S.Rabel>태그입력</S.Rabel>
                <Input<MarketItemForm>
                    type='text'
                    placeholder='#태그 #태그 #태그'
                    name={'tags'}
                    formState={formState}
                    register={register}
                />
            </S.ColWrapper>
            <S.GridWrapper>
                <S.ColWrapper>
                    <S.Rabel>거래 위치</S.Rabel>
                    <Map
                        lat={addressInfo?.lat ? Number(addressInfo.lat) : null}
                        lng={addressInfo?.lon ? Number(addressInfo.lon) : null}
                    />
                </S.ColWrapper>
                {/* 주소 */}
                <S.ColWrapper>
                    <S.Rabel>주소</S.Rabel>
                    <S.Button onClick={() => setIsOpen((prev) => !prev)}>주소 검색</S.Button>
                    {
                        isOpen && (
                            <Modal
                                open={isOpen}
                                onOk={() => setIsOpen(false)}
                                onCancel={() => setIsOpen(false)}
                            >
                                <AddressSearch handleComplete={handleComplete}/>
                            </Modal>
                        )
                    }
                    <Input<MarketItemForm>
                        type='text'
                        placeholder=''
                        name={'address'}
                        formState={formState}
                        register={register}
                    />
                    <Input<MarketItemForm>
                        type='text'
                        placeholder='상세 주소를 입력하세요.'
                        name={'addressDetail'}
                        formState={formState}
                        register={register}
                    />
                </S.ColWrapper>
                <S.ColWrapper>
                    <S.Rabel>사진 첨부</S.Rabel>
                    <S.RowWrapper>
                        {
                            images.map((url, index) => (
                                <UploadImage
                                    key={index}
                                    imageUrl={url}
                                    index={index}
                                    onChangeImages={onChangeImages}
                                />
                            ))
                        }
                    </S.RowWrapper>
                </S.ColWrapper>
            </S.GridWrapper>
            <S.Button type='button' onClick={handleSubmit(onSubmit)}>
                등록하기
            </S.Button>
        </S.Container>
    );
};

export default MarketWriteUI;