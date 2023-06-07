import React from 'react';
import { MarketCommentWriteUIProps } from './MarketCommentWrite.type'

import * as S from './MarketCommentWrite.style'
import ComboBox from '../../../commons/comboBox/ComboBox';

const MarketCommentWriteUI : React.FC<MarketCommentWriteUIProps> = ({
    handleQuestion
}) => {
    return (
        <S.Container>
        <h2>문의하기</h2>
        <ComboBox>
            <S.ColWrpper>
                <ComboBox.TextArea placeholder='문의 내용을 입력해주세요.' />
                <S.InputInfo>
                    <ComboBox.Button handleSubmit={(value : string) => handleQuestion(value)}>등록</ComboBox.Button>
                </S.InputInfo>
            </S.ColWrpper>
        </ComboBox>
    </S.Container>
    );
};

export default MarketCommentWriteUI;