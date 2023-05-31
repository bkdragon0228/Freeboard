import React from 'react';
import { useForm } from "react-hook-form";

import styled from '@emotion/styled';
import { gql, useMutation } from '@apollo/client';
import { Inputs, ModalContainer } from './registerModal';
import { IMutation, IMutationLoginUserArgs } from '../../../commons/types/generated/types';

import { useSetRecoilState } from 'recoil'
import { tokenState } from '../../../../state/tokenState'

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

const LoginModal : React.FC<LoginModalProps>= ({
    isOpen,
    setIsOpen
}) => {
    const setAccessToken = useSetRecoilState(tokenState)
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormProps>();

    const [loginUser] = useMutation<Pick<IMutation, 'loginUser'>, IMutationLoginUserArgs>(LOGIN_USER, {
        onCompleted : (data) => {
            setIsOpen(false)
            localStorage.setItem('accessToken', data.loginUser.accessToken)
            setAccessToken(data.loginUser.accessToken)
        }
    })
    const onClick = async (data : FormProps) => {
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
                <label>Email</label>
                <input {...register('email', {required : 'this is requred'})}/>
                <label>Password</label>
                <input {...register('password', {required : 'this is requred'})}/>
                <button onClick={handleSubmit(onClick)}>Sign In</button>
            </Inputs>
        </ModalContainer>
    );
};

export default LoginModal;