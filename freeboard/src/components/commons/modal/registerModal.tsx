import React from 'react';
import { useForm } from "react-hook-form";
import { gql, useMutation } from '@apollo/client';
import { IMutation, IMutationCreateUserArgs } from '../../../commons/types/generated/types';


import styled from '@emotion/styled';

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

const RegisterModal : React.FC<RegisterModalProps>= ({
    isOpen,
    setIsOpen,
    setIsOpenLogin
}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormProps>();
    const [createUser] = useMutation<Pick<IMutation, 'createUser'>, IMutationCreateUserArgs>(CREATE_USER, {
        onCompleted : () => {
            setIsOpen(false)
            setIsOpenLogin(true)
        }
    })
    const onClick = async (formData : FormProps) => {
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

    if(!isOpen) {
        return null;
    }

    return (
        <ModalContainer>
            <Inputs >
                <button onClick={onClickClose}>X</button>
                <label>Name</label>
                <input {...register('name', {required : 'this is requred'})}/>
                <label>Email</label>
                <input {...register('email', {required : 'this is requred'})}/>
                <label>Password</label>
                <input {...register('password', {required : 'this is requred'})}/>
                <button onClick={handleSubmit(onClick)}>Sign Up</button>
            </Inputs>
        </ModalContainer>
    );
};

export default RegisterModal;