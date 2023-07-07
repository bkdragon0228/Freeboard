import React from 'react';

import useBestBoards from '../../../hook/useBestBoards';

import MainPageUI from './main.presenter';
import useBestUseditems from '../../../hook/useBestUseditems';
import useTextAnimation from '../../../hook/useTextAnimation';

const MainPage = () => {
    const { data : bestBoards } = useBestBoards()
    const { data : bestUseditems } = useBestUseditems()
    const { text : animationText } = useTextAnimation({
        toRotate : ['파워 있는', '자유 게시판과', '마켓']
    })

    return (
        <MainPageUI
            bestBoards={bestBoards}
            bestUseditems={bestUseditems}
            animationText={animationText}
        />
    );
};

export default MainPage;