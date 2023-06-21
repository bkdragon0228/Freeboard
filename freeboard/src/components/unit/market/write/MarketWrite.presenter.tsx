import React, { useState } from 'react';
import dynamic from 'next/dynamic'
import { MarketWriteUIProps } from './MarketWrite.types'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form';
import { Modal } from 'antd'
import { Address } from 'react-daum-postcode';

import * as S from './MarketWrite.style'
import * as yup from 'yup'
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

import Input from '../../../commons/Input';
import AddressSearch from '../../../commons/Address';
import Map from '../../../commons/kakaoMap';
import UploadImage from '../../../commons/upload/UploadImage';

interface MarketItemForm {
    title : string;
    summary? : string;
    tags? : string;
    contents : string;
    price : string;
    zipcode : string;
    address : string;
    addressDetail : string;
}

interface AddressGeo {
    lat : number;
    lon : number
}

const ReactQuill = dynamic(() =>  import('react-quill'), {ssr : false})

const schema = yup.object({
    title : yup.string().required('입력해주세요.'),
    cotents : yup.string().required('입력해주세요.'),
    price : yup.string().required('입력해주세요.'),
})

const MarketWriteUI : React.FC<MarketWriteUIProps> = () => {
    const [images, setImages] = useState<string[]>(['', '']);
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [addressInfo, setAddressInfo] = useState<AddressGeo>({})
    const {register, setValue, trigger, formState } = useForm<MarketItemForm>({
        mode : 'onChange',
        resolver : yupResolver(schema),
        criteriaMode : 'all',
    })

    const onChangeImages = (url : string, index: number) => {
        const newImages = [...images]
        newImages[index] = url
        setImages(newImages)
    }

    const onChaneContents = (value : string) => {
        setValue('contents', value)
        trigger('contents')
    }

    const handleComplete = async (data : Address) => {
        setValue('zipcode', data.zonecode)
        setValue('address', data.address)
        try {
            const config = {
                headers : {
                    Authorization : `KakaoAK ${process.env.NEXT_PUBLIC_REST_API_KEY}`
                }
            }
            const url = `https://dapi.kakao.com/v2/local/search/address.json?query=${data.address}`
            const result = await axios.get(url, config)

            if(result.data !== undefined || result.data !== null) {
                if(result.data.documents[0].x && result.data.documents[0].y) {
                 setAddressInfo({
                      lon: result.data.documents[0].x,
                      lat: result.data.documents[0].y,
                  })
              }}

              setIsOpen(false)
        } catch (error) {
            console.log(error)
        }
    }

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
                    onChange={onChaneContents}
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
                        lat={addressInfo.lat ? Number(addressInfo.lat) : null}
                        lng={addressInfo.lon ? Number(addressInfo.lon) : null}
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

        </S.Container>
    );
};

export default MarketWriteUI;