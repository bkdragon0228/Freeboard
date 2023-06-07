import React from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

const Wrapper = styled.div`
    height: 64px;
    background-color: #ffd600;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
    align-items: center;
`
const Menu = styled.div<{
    isHere : boolean
}>`
    width: 147px;
    display: flex;
    justify-content: center;
    align-items: center;
    color : ${props => props.isHere ? 'black' : 'gray'};
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

const NAVIGATION_MENUS = [
    {title : '자유게시판', path : '/boards'},
    {title : '중고마켓', path : '/market'},
    {title : '마이페이지', path : '/user/my'},
    {title : '장바구니', path : '/basket'}
]

export default function LayoutNavigation() {
  const router = useRouter();
  return (
    <Wrapper>
        {NAVIGATION_MENUS.map((el, i) => (
            <Menu key={i} id={el.path} isHere={router.asPath === el.path} onClick={() => router.push(el.path)}>
                {el.title}
            </Menu>
        ))}
    </Wrapper>
  )
}
