import React from 'react';
import { useForm } from 'react-hook-form';
import { PasswordChangeProps } from '../myEdit.type'

import * as S from '../myEdit.style'
import Input from '../../../commons/Input';

const Password = () => {
    const {register, handleSubmit, formState} = useForm<PasswordChangeProps>()
    return (
        <S.PasswordContainer>
            <S.RowGridWrapper>
                <p>현재 비밀번호</p>
                <Input<PasswordChangeProps>
                    type='password'
                    name={'password'}
                    register={register}
                    formState={formState}
                    placeholder=''
                />
            </S.RowGridWrapper>
            <S.RowGridWrapper>
                <p>새 비밀번호</p>
                <Input<PasswordChangeProps>
                    type='password'
                    name={'newPassword'}
                    register={register}
                    formState={formState}
                    placeholder=''
                />
            </S.RowGridWrapper>
            <S.RowGridWrapper>
                <p>새 비밀번호 확인</p>
                <Input<PasswordChangeProps>
                    type='password'
                    name={'newPasswordConfirm'}
                    register={register}
                    formState={formState}
                    placeholder=''
                />
            </S.RowGridWrapper>
        </S.PasswordContainer>
    );
};

export default Password;