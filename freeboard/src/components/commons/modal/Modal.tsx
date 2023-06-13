import React, { useEffect, useRef } from 'react';

import styled from '@emotion/styled'

interface ModalProps {
    label : string;
    bodyContents : JSX.Element;
    isOpen : boolean;
    setIsOpen : (boolean: boolean) => void
}

const ModalContainer = styled.div`
    position: fixed;
    top : 0;
    left : 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.6);
`

const ModalWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    background-color: white;
`
const ModalCloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    border-radius: 50%;

    &:hover {
        background-color: lightgray;
    }
`
const ModalLabel = styled.div`
    width: 100%;
    padding: 32px;
    font-size: 2rem;
    font-weight: 700;
    margin: 0 auto;
    text-align: center;
    border-bottom: 1px solid lightgray;
`
const ModalContents = styled.div`
    padding : 20px;
    width: 700px;
    min-height: 800px;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    background-color: white;
`

const Modal : React.FC<ModalProps> = ({
    bodyContents,
    isOpen,
    setIsOpen,
    label
}) => {

    if(!isOpen) {
        return null;
    }

    return (
        <ModalContainer >
            <ModalWrapper>
                <ModalCloseButton onClick={() => setIsOpen(false)}>
                     <i className="ri-close-line"></i>
                </ModalCloseButton>
                <ModalLabel>
                    {label}
                </ModalLabel>
                <ModalContents>
                    {bodyContents}
                </ModalContents>
            </ModalWrapper>
        </ModalContainer>
    );
};

export default Modal;