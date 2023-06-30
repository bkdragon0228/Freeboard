import React from 'react';

import useBestBoards from '../../../hook/useBestBoards';

import MainPageUI from './main.presenter';
import useBestUseditems from '../../../hook/useBestUseditems';

const MainPage = () => {
    const { data : bestBoards } = useBestBoards()
    const { data : bestUseditems } = useBestUseditems()

    return (
        <MainPageUI
            bestBoards={bestBoards}
            bestUseditems={bestUseditems}
        />
    );
};

export default MainPage;