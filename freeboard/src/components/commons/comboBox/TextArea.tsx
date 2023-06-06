import styled from '@emotion/styled';
import React from 'react';
import { useComboBoxContext } from './useComboBoxContext';

export interface TextAreaProps {
    placeholder? : string;
}

const TextArea : React.FC<TextAreaProps> = ({
    placeholder = '내용을 입력해주새요.'
}) => {

    const {value, handler} = useComboBoxContext()

    return (
        <StyledTextArea placeholder={placeholder} value={value} onChange={(e) => handler(e.target.value)}/>
    );
};


const StyledTextArea = styled.textarea`
    width: 1200px;
    padding: 20px;
    height: 160px;
    border: none;
    resize: none;
`
export default TextArea;