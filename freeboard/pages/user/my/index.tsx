import React from 'react';

import withAuth from '../../../src/hoc/withAuth';
import My from '../../../src/components/unit/myPage/my.container';

const MyPage = () => {
    return (
        <My />
    );
};

export default withAuth(MyPage, true);