import React, { useMemo, useState } from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_USED_ITEMS_I_SOLD, FETCH_USED_ITEMS_I_PICKED } from './my.query'
import { IQuery, IQueryFetchUseditemsIPickedArgs, IQueryFetchUseditemsISoldArgs } from '../../../commons/types/generated/types';

import useUser from '../../../hook/useUser';

import MYUI from './my.presenter';

const My = () => {


    const {data : useditemsIsoldData, refetch : useditemsIsoldRefetch} = useQuery<Pick<IQuery, 'fetchUseditemsISold'>, IQueryFetchUseditemsISoldArgs>(FETCH_USED_ITEMS_I_SOLD, {
        variables : {
            page : 1,
            search : ''
        }
    })
    const {data : pickedUseditemData, refetch : refetchUseditemPicked} = useQuery<Pick<IQuery, 'fetchUseditemsIPicked'>, IQueryFetchUseditemsIPickedArgs>(FETCH_USED_ITEMS_I_PICKED, {
        variables : {
            page : 1,
            search : ''
        }
    })
    const [page, setPage] = useState<number>(1)
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [isSoldItem, setIsoldItem] = useState<boolean>(true)
    const lastPage = useMemo(() => {
        if(isSoldItem) {
            return Math.ceil(useditemsIsoldData?.fetchUseditemsISold.length / 10)
        } else {
            return Math.ceil(pickedUseditemData?.fetchUseditemsIPicked.length / 10)
        }
    } , [useditemsIsoldData?.fetchUseditemsISold, pickedUseditemData?.fetchUseditemsIPicked, isSoldItem])

    const handleItemCate = (value : boolean) => {
        setIsoldItem(value)
    }

    return (
        <MYUI
            useditemsIsoldData={useditemsIsoldData}
            pickedUseditemData={pickedUseditemData}
            lastPage={lastPage}
            page={page}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setPage={setPage}
            refetchUseditemIsold={useditemsIsoldRefetch}
            refetchUseditemPicked={refetchUseditemPicked}
            isSoldItem={isSoldItem}
            handleItemCate={handleItemCate}
        />
    );
};

export default My;