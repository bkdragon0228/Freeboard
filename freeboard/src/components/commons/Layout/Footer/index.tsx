import React from 'react';

import styled from '@emotion/styled';

const Footer = () => {
    return (
        <Container>
            <Section>
                <div>name : BK / </div>
                <div>github : <a href='https://github.com/bkdragon0228/Freeboard' target='_blank'>https://github.com/bkdragon0228/Freeboard</a> / </div>
                <div>Blog : <a href='https://bkdragon0228.tistory.com/' target='_blank'>https://bkdragon0228.tistory.com/</a></div>
            </Section>
        </Container>
    )
}

export default Footer;

export const Container = styled.footer`
    padding: 20px;
    border-top: 1px solid lightgray;
    height: 100px;
`

export const Section = styled.div`
    margin: 0 auto;
    display: flex;
    column-gap: 1rem;
    justify-content: center;
    align-items: center;
`