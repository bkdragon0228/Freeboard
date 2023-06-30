import React from 'react';
import { IMainUIProps } from './main.type'

import * as S from './main.style'
import ItemCard from '../../commons/ItemCard';
import Link from 'next/link';

const MainPageUI : React.FC<IMainUIProps> = ({
    bestBoards,
    bestUseditems
}) => {
    return (
        <S.Container>
           <S.Section bgcolor='#fbf7f2'>
                <S.contents>
                    <S.SectionTitle width={320}>
                        <h1>
                            파워 있는 <br/>
                            자유 게시판과 <br/>
                            마켓
                        </h1>
                        <div>
                            파자마를 입은 듯 편하게 이용 가능한 자유 게시판과 중고 마켓
                        </div>
                    </S.SectionTitle>
                </S.contents>
           </S.Section>
           <S.Section>
                <S.contents>
                    <div></div>
                        <S.SectionTitle>
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
                    <div>
                        <h1>자유게시판 인기글</h1>
                        <div>
                            다양한 글을 보고 싶다면?
                            자유 게시판으로&nbsp;
                            <Link href='/boards'>바로 가기</Link>
                        </div>
                    </div>
                    <ItemCard
                        bestItems={bestBoards?.fetchBoardsOfTheBest}
                    />
                </S.contentsCol>
           </S.Section>
           <S.Section>

                <S.contentsCol>
                    <div>
                        <h1>중고거래 인기매물</h1>
                        <div>
                            다양한 상품을 보고 싶다면?
                            중고 마켓으로&nbsp;
                            <Link href='/market'>바로 가기</Link>
                        </div>
                    </div>
                    <ItemCard
                        bestItems={bestUseditems?.fetchUseditemsOfTheBest}
                    />
                </S.contentsCol>
           </S.Section>
        </S.Container>
    );
};

export default MainPageUI;