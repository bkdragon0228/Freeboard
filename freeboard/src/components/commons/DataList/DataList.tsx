import React from 'react';
import { IBoard, IQuery, IUseditem } from '../../../commons/types/generated/types';
import { ApolloQueryResult, OperationVariables } from '@apollo/client';

import useDate from '../../../hook/useDate';

import * as S from './DataList.style'
import Pagenation from '../pagination/pagination';
import useMove from '../../../hook/useMove';
import useMoney from '../../../hook/useMoney';

export type ResponceDataOfList = Pick<IQuery, 'fetchBoards'> | Pick<IQuery, 'fetchUseditems'> | Pick<IQuery, 'fetchUseditemsISold'>

type ListData = IBoard[] | IUseditem[]

interface IDataListProps <T extends ResponceDataOfList> {
    page : number;
    setPage : (number : number) => void;
    lastPage : number;
    data : T;
    refetchData : (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<T>>
    searchTerm : string;
}

const DataList = <T extends ResponceDataOfList>({
    data,
    lastPage,
    page,
    refetchData,
    setPage,
    searchTerm
} : IDataListProps<T>) => {
    const getDate = useDate()
    const { moveToPath } = useMove()
    const getMoney = useMoney()

    if(!data) return null;

    if('fetchBoards' in data) {
        return (
            <S.ListWrapper>
              <S.List>
                {data?.fetchBoards.map((e, i) => (
                  <S.Element key={e._id}>
                    <div>{i + 1}</div>
                    <div id={e._id} onClick={() => moveToPath(`/boards/${e._id}`)}>
                      {
                        e.title.replaceAll(searchTerm, `!@#$${searchTerm}!@#$`).split('!@#$').map((title) => (
                          <S.ElementTitle key={e._id} isKeyword={title === searchTerm ? true : false}>
                            {title}
                          </S.ElementTitle>
                        ))
                      }
                    </div>
                    <div>{e.writer}</div>
                    <div>{getDate(e.createdAt)}</div>
                  </S.Element>
                ))}
                 <Pagenation
                    lastPage={lastPage}
                    page={page}
                    setPage={setPage}
                    refetchBoards={refetchData}
                />
              </S.List>
            </S.ListWrapper>
        )
    } else if ('fetchUseditems' in data){
        return (
            <S.ListWrapper>
              <S.List>
                {data?.fetchUseditems.map((e, i) => (
                  <S.Element key={e._id}>
                    <div>{i + 1}</div>
                    <div id={e._id} >
                      {
                        e.name.replaceAll(searchTerm, `!@#$${searchTerm}!@#$`).split('!@#$').map((name) => (
                          <S.ElementTitle key={e._id} isKeyword={name === searchTerm ? true : false}>
                            {name}
                          </S.ElementTitle>
                        ))
                      }
                    </div>
                    <div>{e.seller.name}</div>
                    <div>{getDate(e.createdAt)}</div>
                  </S.Element>
                ))}
                 <Pagenation
                    lastPage={lastPage}
                    page={page}
                    setPage={setPage}
                    refetchBoards={refetchData}
                />
              </S.List>
            </S.ListWrapper>
        )
    } else {
        return (
            <S.ListWrapper>
              <S.List>
                {data?.fetchUseditemsISold.map((e, i) => (
                  <S.Element key={e._id}>
                    <div>{i + 1}</div>
                    <div id={e._id} >
                      {
                        e.name.replaceAll(searchTerm, `!@#$${searchTerm}!@#$`).split('!@#$').map((name) => (
                          <S.ElementTitle key={e._id} isKeyword={name === searchTerm ? true : false}>
                            {name}
                          </S.ElementTitle>
                        ))
                      }
                    </div>
                    <div>{getMoney(e.price.toString())}</div>
                    <div>{getDate(e.createdAt)}</div>
                  </S.Element>
                ))}

              </S.List>
              <Pagenation
                    lastPage={lastPage}
                    page={page}
                    setPage={setPage}
                    refetchBoards={refetchData}
                />
            </S.ListWrapper>
        )
    }
};

export default DataList;