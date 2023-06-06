import React, { PropsWithChildren, useState } from 'react';
import { ComboBoxContextProviderProps, ComboBoxProvider } from './useComboBoxContext'

import styled from '@emotion/styled';

import Input, { ComnoBoxInputProps } from './Input'
import Button, { ComboBoxButtonProps } from './Button'
import TextArea, { TextAreaProps } from './TextArea';

interface ComboBoxProps {
    initialValue? : string;
}

const ComboBox : React.FC<PropsWithChildren<ComboBoxProps>> & {
    Input : React.FC<ComnoBoxInputProps>
    Button : React.FC<ComboBoxButtonProps>
    TextArea : React.FC<TextAreaProps>
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
        <ComboBoxProvider value={providerValue}>
            <StyledComboBox>
                {children}
            </StyledComboBox>
        </ComboBoxProvider>
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
ComboBox.TextArea = TextArea;

export default ComboBox;