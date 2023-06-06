import React from 'react';
import { useComboBoxContext } from './useComboBoxContext';

import styled from '@emotion/styled';

export interface ComnoBoxInputProps {
    placeholder? : string
}

const Input : React.FC<ComnoBoxInputProps> = ({
    placeholder = '검색어를 입력해주세요.'
}) => {
    const { value , handler } = useComboBoxContext()

    return (
       <StyledInput type='text' placeholder={placeholder} value={value} onChange={(e) => handler(e.target.value)}/>
    );
};

const StyledInput = styled.input`
    width: 282px;
    height: 52px;
    background: #F2F2F2;
    padding-left: 1rem;
    border: none;

    &:focus {
        border: 1px solid black;
    }
`

export default Input;