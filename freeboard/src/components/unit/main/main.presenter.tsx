import React, { useEffect } from 'react';
import { css } from '@emotion/css'
import { IMainUIProps } from './main.type'

import Link from 'next/link';

import * as S from './main.style'
import ItemCard from '../../commons/ItemCard';

const MainPageUI : React.FC<IMainUIProps> = ({
    bestBoards,
    bestUseditems,
    animationText
}) => {

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: .5,
          }

        const observer : IntersectionObserver = new IntersectionObserver(entries => {
            const active = css`
                transform: translateX(0);
                opacity: 1;
            `

            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add(active);
              } else {
                entry.target.classList.remove(active);
              }
            });
        }, options);

        const titleList = document.querySelectorAll('#SectionTitle');
        console.log(titleList)
        titleList.forEach(el => observer.observe(el));

      },  [])


    return (
        <S.Container>
           <S.Section bgcolor='#fbf7f2'>
                <S.contents>
                    <S.SectionTitleBasic width={320}>
                        <h1>파자마 : </h1>
                        <h2 style={{
                            height : '100px'
                        }}>
                            {animationText}
                        </h2>
                        <div>
                            파자마를 입은 듯 편하게 이용 가능한 자유 게시판과 중고 마켓
                        </div>
                    </S.SectionTitleBasic>
                </S.contents>
           </S.Section>
           <S.Section>
                <S.contents>
                    <div></div>
                        <S.SectionTitle id='SectionTitle'>
                            <h1>
                                로그인 없이 자유로운 게시판 <br/>
                                믿을 수 있는 중고 직거래 마켓
                            </h1>
                            <div>
                                자유 게시판을 통해 일상을 공유하고 <br/>
                                중고 마켓을 이용해 안전한 거래를 지금 바로 이용해보세요!
                            </div>
                        </S.SectionTitle>
                </S.contents>
           </S.Section>
           <S.Section bgcolor='#e7f4fc'>
                <S.contentsCol>
                    <S.SubTitle id='SectionTitle'>
                        <h1>자유게시판 인기글</h1>
                        <div>
                            다양한 글을 보고 싶다면?
                            자유 게시판으로&nbsp;
                            <Link href='/boards'>바로 가기</Link>
                        </div>
                    </S.SubTitle>
                    <ItemCard
                        bestItems={bestBoards?.fetchBoardsOfTheBest}
                    />
                </S.contentsCol>
           </S.Section>
           <S.Section bgcolor='#f8f9fa'>
                <S.contentsCol>
                    <S.SubTitle id='SectionTitle'>
                        <h1>중고거래 인기매물</h1>
                        <div>
                            다양한 상품을 보고 싶다면?
                            중고 마켓으로&nbsp;
                            <Link href='/market'>바로 가기</Link>
                        </div>
                    </S.SubTitle>
                    <ItemCard
                        bestItems={bestUseditems?.fetchUseditemsOfTheBest}
                    />
                </S.contentsCol>
           </S.Section>
        </S.Container>
    );
};

export default MainPageUI;