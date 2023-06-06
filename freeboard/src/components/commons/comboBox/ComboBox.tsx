import React, { PropsWithChildren, useState } from 'react';
import { ComboBoxContextProviderProps, CounterProvider } from './useComboBoxContext'

import styled from '@emotion/styled';

import Input, { ComnoBoxInputProps } from './Input'
import Button, { ComboBoxButtonProps } from './Button'

interface ComboBoxProps {
    initialValue? : string;
}

const ComboBox : React.FC<PropsWithChildren<ComboBoxProps>> & {
    Input : React.FC<ComnoBoxInputProps>
    Button : React.FC<ComboBoxButtonProps>
} = ({ children, initialValue = '' }) => {
    const [inputValue, setInputValue] = useState<string>(initialValue)

    const handleInputValue = (value : string) => {
        setInputValue(value)
    }

    const providerValue : ComboBoxContextProviderProps = {
        handler : handleInputValue,
        value : inputValue
    }

    return (
        <CounterProvider value={providerValue}>
            <StyledComboBox>
                {children}
            </StyledComboBox>
        </CounterProvider>
    );
};

const StyledComboBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    column-gap: 1rem;
`

ComboBox.Input = Input;
ComboBox.Button = Button;

export default ComboBox;