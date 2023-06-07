import React from 'react';
import { MarketCommentListUIProps } from './MarketCommentList.type'

import * as S from './MarketCommentList.style'

const MarketCommentListUI : React.FC<MarketCommentListUIProps> = () => {
    return (
        <S.Container>
            중고 마켓 댓글 리스트 컴포넌트
        </S.Container>
    );
};

export default MarketCommentListUI;