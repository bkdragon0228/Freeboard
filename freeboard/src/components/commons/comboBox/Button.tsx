import React, { useCallback } from 'react';
import { useComboBoxContext } from './useComboBoxContext';

import styled from '@emotion/styled';

export interface ComboBoxButtonProps {
    handleSubmit : (value : string) => void;
}

const Button : React.FC<ComboBoxButtonProps> = ({children, handleSubmit}) => {
    const { value , handler} = useComboBoxContext()

    const onSumbit = useCallback(() => {
        handleSubmit(value)
        handler('')
    }, [handleSubmit, value])

    if(children) {
        return (
            <StyledButton onClick={onSumbit}>{children}</StyledButton>
        );
    }

    return (
        <StyledButton onClick={onSumbit}>
            <i className="ri-search-line"></i>
        </StyledButton>
    );
};

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 16px;
    width: 78px;
    height: 52px;
    background: #000000;
    color : white;
`

export default Button;