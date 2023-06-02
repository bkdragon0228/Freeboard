import React from 'react';
import withAuth from '../../../src/hoc/withAuth';

const MargetNewPage = () => {
    return (
        <div>
            마켓 상품 등록 페이지
        </div>
    );
};

export default withAuth(MargetNewPage, true);