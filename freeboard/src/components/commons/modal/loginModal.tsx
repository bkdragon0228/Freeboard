import React from 'react';
import { useForm } from "react-hook-form";
import { gql, useMutation } from '@apollo/client';
import { IMutation, IMutationLoginUserArgs } from '../../../commons/types/generated/types';
import { useSetRecoilState } from 'recoil'
import { tokenState } from '../../../../state/tokenState'
import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'

import { Inputs, ModalContainer, Form } from './registerModal';
import { ErrorMessage } from '@hookform/error-message';
import StyledMessage from '../ErrorMessage';

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
    setIsOpen
}) => {
    const setAccessToken = useSetRecoilState(tokenState)
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormProps>({
        criteriaMode : 'all',
        resolver : yupResolver(schema),
        mode : 'onChange'
    });

    const [loginUser] = useMutation<Pick<IMutation, 'loginUser'>, IMutationLoginUserArgs>(LOGIN_USER, {
        onCompleted : (data) => {
            setIsOpen(false)
            localStorage.setItem('accessToken', data.loginUser.accessToken)
            setAccessToken(data.loginUser.accessToken)
        }
    })
    const onSubmit = async (data : FormProps) => {

        console.log(data)
        try {
            const response = await loginUser({
                variables : {
                    email : data.email,
                    password : data.password
                }
            })
            console.log('login Success')
        } catch (error) {
            console.log(error)
        }
    }
    const onClickClose = () => {
        setIsOpen(false)
    }

    if(!isOpen) {
        return null;
    }

    return (
        <ModalContainer>
            <Inputs >
                <button onClick={onClickClose}>X</button>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <label>Email</label>
                    <input type='text' {...register('email')}/>
                    <ErrorMessage
                            errors={errors}
                            name='email'
                            render={({messages}) =>
                            messages && Object.entries(messages).map(([type, message]) => (
                                <StyledMessage key={type} color='red'>{message}</StyledMessage>
                            ))
                        }
                    />
                    <label>Password</label>
                    <input type='password' {...register('password')}/>
                    <ErrorMessage
                            errors={errors}
                            name='password'
                            render={({messages}) =>
                            messages && Object.entries(messages).map(([type, message]) => (
                                <StyledMessage key={type} color='red'>{message}</StyledMessage>
                            ))
                        }
                    />
                    <button type='submit'>Sign In</button>
                </Form>

            </Inputs>
        </ModalContainer>
    );
};

export default LoginModal;