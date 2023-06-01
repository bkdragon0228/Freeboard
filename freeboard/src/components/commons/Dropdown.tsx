import React, { PropsWithChildren, ReactElement } from 'react';

import styled from '@emotion/styled';
import useDetectClose from '../../hook/useDetectClose';
import { css } from '@emotion/css';

const Container = styled.div`
    position: relative;
`

const Button = styled.button`
    width: 50px;
    background-color: transparent;
    border: none;
    &:hover {
       border : 1px solid black;
    }
`

const Contents = styled.div<{
    isDropped : boolean
}>`
    background: white;
    position: absolute;
    top: 50px;
    left: 50%;
    padding: 1rem 0 1rem 0;
    width: 258px;
    border: 1px solid lightgray;
    border-radius: 20px;
    text-align: center;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    opacity: ${(props) => props.isDropped ? 1 : 0};
    visibility: ${(props) => props.isDropped ? 'visible' : 'hidden'};
    transform: translate(-50%, 0);
    transition: opacity 0.4s ease, visibility 0.4s;
    z-index: 9;

`



const Dropdown : React.FC<PropsWithChildren<{bodyContent : ReactElement}>> = ({
    children,
    bodyContent
}) => {
    const {isOpen, ref, removeHandler} = useDetectClose(false);

    console.log(isOpen)
    return (
        <Container>
            <Button ref={ref} onClick={removeHandler}>{children}</Button>
            <Contents isDropped={isOpen}>
                {bodyContent}
            </Contents>
        </Container>
    );
};

export default Dropdown;