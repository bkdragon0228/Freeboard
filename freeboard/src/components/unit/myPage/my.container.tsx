import React, { useMemo } from 'react';

import MYUI from './my.presenter';
import useUser from '../../../hook/useUser';

const My = () => {
    const myPageSectionsPath = useMemo(() => [
        {
            path : '/user/my',
            name : '내 장터'
        },
        {
            path : '/user/my/point',
            name : '내 포인트'
        },
        {
            path : '/user/my/edit',
            name : '내 프로필'
        }
    ], [])
    const {data : userData} = useUser()

    return (
        <MYUI
            pagePath={myPageSectionsPath}
            userData={userData}
        />
    );
};

export default My;