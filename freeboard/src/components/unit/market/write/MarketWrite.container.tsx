import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { Address } from 'react-daum-postcode';
import { CREATE_USED_ITEM } from './MarketWrite.query';
import { TCreateUsedItem , MarketItemForm , AddressGeo } from './MarketWrite.types'
import { IMutationCreateUseditemArgs } from '../../../../commons/types/generated/types';

import axios from 'axios';
import * as yup from 'yup'
import 'react-quill/dist/quill.snow.css';

import MarketWriteUI from './MarketWrite.presenter';

const schema = yup.object({
    title : yup.string().required('입력해주세요.'),
    contents : yup.string().required('입력해주세요.'),
    price : yup.string().required('입력해주세요.'),
})

const MarketWrite = () => {

    const [createUsedItem] = useMutation<TCreateUsedItem, IMutationCreateUseditemArgs>(CREATE_USED_ITEM)

    const [images, setImages] = useState<string[]>(['', '']);
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [addressInfo, setAddressInfo] = useState<AddressGeo>(null)
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

    const onChangeContents = (value : string) => {
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

    const handleSubmit = async (data : MarketItemForm) => {
        try {
            void createUsedItem({
                variables : {
                    createUseditemInput : {
                        contents : data.contents,
                        name : data.title,
                        price : Number(data.price),
                        images,
                        tags : [],
                        remarks : '',
                        useditemAddress : {
                            address : data.address,
                            addressDetail : data.addressDetail,
                            lat : 1,
                            lng : 1,
                            zipcode : data.zipcode,
                        }
                    }
                }
            })
        } catch (error) {
            console.log(error)
        }

    }
    return (
       <MarketWriteUI
        formState={formState}
        handleComplete={handleComplete}
        handleSubmit={handleSubmit}
        images={images}
        onChangeImages={onChangeImages}
        register={register}
        onChangeContents={onChangeContents}
        addressInfo={addressInfo}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
       />
    );
};

export default MarketWrite;