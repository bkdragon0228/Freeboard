import React from 'react';

import useBestBoards from '../../../hook/useBestBoards';

import MainPageUI from './main.presenter';

const MainPage = () => {
    const { data : bestBoards } = useBestBoards()

    return (
        <MainPageUI
            bestBoards={bestBoards}
        />
    );
};

export default MainPage;