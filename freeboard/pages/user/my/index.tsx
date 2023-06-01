import React from 'react';
import withAuth from '../../../src/hoc/withAuth';

const MyPage = () => {
    return (
        <div>
            로그인 해야만 들어올 수 있는 마이페이지 입니다.
        </div>
    );
};

export default withAuth(MyPage, true);