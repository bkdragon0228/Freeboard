import React from 'react';

import MYUI from './my.presenter';
import useUser from '../../../hook/useUser';

const My = () => {
    const {data : userData} = useUser()

    return (
        <MYUI
            userData={userData}
        />
    );
};

export default My;