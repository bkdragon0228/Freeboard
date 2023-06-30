import React from 'react';
import { useForm } from "react-hook-form";
import { gql, useMutation } from '@apollo/client';
import { IMutation, IMutationLoginUserArgs } from '../../../commons/types/generated/types';
import { useSetRecoilState } from 'recoil'
import { tokenState } from '../../../../state/tokenState'
import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'

import { Form, RowWrapper, Button } from './registerModal';

import Modal from './Modal';
import Input from '../Input';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

const LOGIN_USER = gql`
    mutation LoginUser ($email : String!, $password : String!) {
        loginUser (email : $email, password : $password) {
            accessToken
        }
    }
`

interface LoginModalProps {
    isOpen : boolean;
    setIsOpen : (boolean : boolean) => void;
    setIsOpenRegister : (boolean : boolean) => void;
}

interface FormProps {
    email : string;
    password : string;
}

const schema = yup.object({
    email : yup.string().email('이메일 형식을 사용해주세요.').required('이메일을 입력해주세요.'),
    password : yup.string().min(8, '비밀번호는 8자 이상이여야 합니다.').required('비밀번호를 입력해주세요.'),
})

const LoginModal : React.FC<LoginModalProps>= ({
    isOpen,
    setIsOpen,
    setIsOpenRegister
}) => {
    const router = useRouter()
    const setAccessToken = useSetRecoilState(tokenState)
    const { register, handleSubmit, watch, formState } = useForm<FormProps>({
        criteriaMode : 'all',
        resolver : yupResolver(schema),
        mode : 'onChange'
    });

    const [loginUser] = useMutation<Pick<IMutation, 'loginUser'>, IMutationLoginUserArgs, AxiosError>(LOGIN_USER, {
        onCompleted : (data) => {
            setIsOpen(false)
            setAccessToken(data.loginUser.accessToken)
            router.reload()
        }
    })

    const onSubmit = async (data : FormProps) => {
        try {
            await loginUser({
                variables : {
                    email : data.email,
                    password : data.password
                }
            })
            console.log('login Success')
        } catch (error) {
            alert(error?.message)
        }
    }

    const onClickRegister = () => {
        setIsOpen(false)
        setIsOpenRegister(true)
    }

    const bodyContents = (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input<FormProps>
                    formState={formState}
                    name='email'
                    placeholder='이메일'
                    register={register}
                    type='text'
                />
                <Input<FormProps>
                    formState={formState}
                    name='password'
                    placeholder='비밀번호'
                    register={register}
                    type='text'
                />
                <RowWrapper>
                    <Button type='submit'>로그인</Button>
                    <Button type='button' onClick={onClickRegister}>회원가입</Button>
                </RowWrapper>
            </Form>
        </>
    )

    return (
        <Modal
            label='로그인'
            bodyContents={bodyContents}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        />
    );
};

export default LoginModal;