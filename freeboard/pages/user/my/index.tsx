import React from 'react';

import withAuth from '../../../src/hoc/withAuth';
import My from '../../../src/components/unit/myPage/my.container';
import MyPageLayout from '../../../src/components/commons/myPageLayout';

const MyPage = () => {
    return (
        <MyPageLayout>
            <My />
        </MyPageLayout>
    );
};

export default withAuth(MyPage, true);