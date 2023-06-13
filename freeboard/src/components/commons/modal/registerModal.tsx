import React from 'react';
import { useForm } from "react-hook-form";
import { gql, useMutation } from '@apollo/client';
import { IMutation, IMutationCreateUserArgs } from '../../../commons/types/generated/types';
import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'
import styled from '@emotion/styled';

import { ErrorMessage } from '@hookform/error-message';
import StyledMessage from '../ErrorMessage';
import Modal from './Modal';


const CREATE_USER = gql`
    mutation CreateUser($createUserInput : CreateUserInput!){
        createUser (createUserInput : $createUserInput) {
            _id
            email
            name
            picture
            createdAt
            updatedAt
            deletedAt
        }
    }
`

const schema = yup.object({
    name : yup.string().required('이름을 입력해주세요.'),
    email : yup.string().email('이메일 형식을 사용해주세요.').required('이메일을 입력해주세요.'),
    password : yup.string().min(8, '비밀번호는 8자 이상이여야 합니다.').required('비밀번호를 입력해주세요.'),
})

interface RegisterModalProps {
    isOpen : boolean;
    setIsOpen : (boolean : boolean) => void;
    setIsOpenLogin : (boolean : boolean) => void;
}

interface FormProps {
    name : string;
    nickname? : string;
    email : string;
    password : string;
}

export const ModalContainer = styled.div`
    position: fixed;
    top : 0;
    left : 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.6);
    color : white;
`

export const Inputs = styled.div`
    padding: 20px;
    width: 500px;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: black;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`

const RegisterModal : React.FC<RegisterModalProps>= ({
    isOpen,
    setIsOpen,
    setIsOpenLogin
}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormProps>({
        criteriaMode : 'all',
        resolver : yupResolver(schema),
        mode : 'onChange'
    });
    const [createUser] = useMutation<Pick<IMutation, 'createUser'>, IMutationCreateUserArgs>(CREATE_USER, {
        onCompleted : () => {
            setIsOpen(false)
            setIsOpenLogin(true)
        }
    })
    const onSubmit = async (formData : FormProps) => {
        try {
            const response = await createUser({
                variables : {
                    createUserInput : formData
                }
            })


        } catch (error) {
            console.log(error)
        }
    }

    const onClickClose = () => {
        setIsOpen(false)
    }

    const bodyContents = (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label>
                <input {...register('name')}/>
                    <ErrorMessage
                        errors={errors}
                        name='name'
                        render={({messages}) =>
                        messages && Object.entries(messages).map(([type, message]) => (
                            <StyledMessage key={type} color='red'>{message}</StyledMessage>
                        ))
                    }
                />
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
        </>
    )



    return (
        <Modal
            label='회원가입'
            bodyContents={bodyContents}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        />
    );
};

export default RegisterModal;