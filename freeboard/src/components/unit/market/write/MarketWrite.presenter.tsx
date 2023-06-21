import React from 'react';
import dynamic from 'next/dynamic'
import { MarketWriteUIProps } from './MarketWrite.types'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form';

import * as S from './MarketWrite.style'
import * as yup from 'yup'
import 'react-quill/dist/quill.snow.css';

import Input from '../../../commons/Input';
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';

interface MarketItemForm {
    title : string;
    summary? : string;
    tags? : string;
    contents : string;
    price : string;
    zipcode? : string;
    address? : string;
    addressDetail : string;
}

const ReactQuill = dynamic(() =>  import('react-quill'), {ssr : false})

const schema = yup.object({
    title : yup.string().required('입력해주세요.'),
    cotents : yup.string().required('입력해주세요.'),
    price : yup.string().required('입력해주세요.'),
})

const MarketWriteUI : React.FC<MarketWriteUIProps> = () => {
    const {register, setValue, trigger, formState } = useForm<MarketItemForm>({
        mode : 'onChange',
        resolver : yupResolver(schema),
        criteriaMode : 'all',
    })

    const onChaneContents = (value : string) => {
        setValue('contents', value)
        trigger('contents')
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
            <S.ColWrapper>
                <S.Rabel>주소</S.Rabel>
            </S.ColWrapper>
        </S.Container>
    );
};

export default MarketWriteUI;