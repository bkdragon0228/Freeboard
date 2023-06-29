import React from 'react';
import { useForm } from "react-hook-form";
import { gql, useMutation } from '@apollo/client';
import { IMutation, IMutationCreateUserArgs } from '../../../commons/types/generated/types';
import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'
import styled from '@emotion/styled';

import Modal from './Modal';
import Input from '../Input';


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

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    padding: 20px;
    text-align: center;
`
export const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
`

export const Button = styled.button`
    width: 150px;
    padding: 20px;
    text-align: center;
    border: none;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
        border: 1px solid lightgray;
    }
`

const RegisterModal : React.FC<RegisterModalProps>= ({
    isOpen,
    setIsOpen,
    setIsOpenLogin
}) => {
    const { register, handleSubmit, watch, formState } = useForm<FormProps>({
        criteriaMode : 'all',
        resolver : yupResolver(schema),
        mode : 'onChange'
    })

    const [createUser] = useMutation<Pick<IMutation, 'createUser'>, IMutationCreateUserArgs>(CREATE_USER, {
        onCompleted : () => {
            setIsOpen(false)
            setIsOpenLogin(true)
        }
    })

    const onSubmit = async (formData : FormProps) => {
        try {
            await createUser({
                variables : {
                    createUserInput : formData
                }
            })
        } catch (error) {
            alert(error?.message)
        }
    }

    const bodyContents = (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input<FormProps>
                    formState={formState}
                    name='name'
                    placeholder='이름'
                    register={register}
                    type='text'
                />
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
                    type='password'
                />
                <RowWrapper>
                    <Button type='submit'>회원가입</Button>
                </RowWrapper>
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