import React from 'react';

import { MarketCommentListUIProps } from './MarketCommentList.type'

import * as S from './MarketCommentList.style'
import ComboBox from '../../../commons/comboBox/ComboBox';

const MarketCommentListUI : React.FC<MarketCommentListUIProps> = () => {
    return (
        <S.Container>
            <h2>문의하기</h2>
            <ComboBox>
                <S.ColWrpper>
                    <ComboBox.TextArea placeholder='문의 내용을 입력해주세요.' />
                    <S.InputInfo>
                        <ComboBox.Button handleSubmit={() => {}}>등록</ComboBox.Button>
                    </S.InputInfo>
                </S.ColWrpper>
            </ComboBox>
        </S.Container>
    );
};

export default MarketCommentListUI;