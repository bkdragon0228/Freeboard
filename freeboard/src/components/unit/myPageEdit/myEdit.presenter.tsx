import React from 'react';

import * as S from './myEdit.style'
import Password from './components/Password';

const MyEditUI = () => {
    return (
        <S.Container>
            <h2>프로필 수정</h2>
            <Password />
        </S.Container>
    );
};

export default MyEditUI;

