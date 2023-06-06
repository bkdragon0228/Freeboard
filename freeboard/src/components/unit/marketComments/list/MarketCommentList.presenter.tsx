import React from 'react';

import { MarketCommentListUIProps } from './MarketCommentList.type'

import * as S from './MarketCommentList.style'
import ComboBox from '../../../commons/comboBox/ComboBox';

const MarketCommentListUI : React.FC<MarketCommentListUIProps> = () => {
    return (
        <div>
            <ComboBox>
                <ComboBox.Input />
                <ComboBox.Button handleSubmit={() => {}}>클릭</ComboBox.Button>
            </ComboBox>
        </div>
    );
};

export default MarketCommentListUI;