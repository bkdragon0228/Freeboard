import React from 'react';
import { DeepRequired, FieldErrorsImpl, FieldName, FormState, Path, UseFormRegister } from 'react-hook-form';


import styled from '@emotion/styled'
import StyledMessage from './ErrorMessage';
import { ErrorMessage, FieldValuesFromFieldErrors } from '@hookform/error-message';

interface InputProps<TFormData extends {}> {
    placeholder : string;
    name : Path<TFormData>;
    register : UseFormRegister<TFormData>;
    formState : FormState<TFormData>;
    type : 'text' | 'password';
}

const StyledInput = styled.input`
    width: 600px;
    padding: 16px 20px;
    border-radius: 20px;
    border: 1px solid lightgray;
    margin-bottom: 1rem;
`

const Input = <TFormData extends {}>({
    placeholder,
    register,
    formState,
    type,
    name
} : InputProps<TFormData>) => {
    const {errors} = formState

    return (
        <div>
            <StyledInput type={type} placeholder={placeholder} {...register(name)} />
            <ErrorMessage
                    errors={errors}
                    name={name as unknown as FieldName<FieldValuesFromFieldErrors<Partial<FieldErrorsImpl<DeepRequired<TFormData>>>>>}
                    render={({messages}) =>
                    messages && Object.entries(messages).map(([type, message]) => (
                        <StyledMessage key={type} color='red'>{message}</StyledMessage>
                    ))
                }
            />
        </div>
    );
};

export default Input;