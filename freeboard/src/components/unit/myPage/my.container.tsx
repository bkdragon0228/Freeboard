import React, { useMemo, useState } from 'react';
import { FETCH_USED_ITEMS_I_SOLD } from './my.query'

import MYUI from './my.presenter';
import useUser from '../../../hook/useUser';
import { useQuery } from '@apollo/client';
import { IQuery } from '../../../commons/types/generated/types';

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
    const {data : useditemsIsoldData, refetch : useditemsIsoldRefetch} = useQuery<Pick<IQuery, 'fetchUseditemsISold'>>(FETCH_USED_ITEMS_I_SOLD)
    const [page, setPage] = useState<number>(1)
    const lastPage = useMemo(() => useditemsIsoldData?.fetchUseditemsISold.length, [useditemsIsoldData?.fetchUseditemsISold])
    const [searchTerm, setSearchTerm] = useState<string>('')

    return (
        <MYUI
            pagePath={myPageSectionsPath}
            userData={userData}
            useditemsIsoldData={useditemsIsoldData}
            lastPage={lastPage}
            page={page}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setPage={setPage}
            refetchUseditemIsold={useditemsIsoldRefetch}
        />
    );
};

export default My;