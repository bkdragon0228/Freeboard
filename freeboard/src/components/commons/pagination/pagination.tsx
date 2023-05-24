import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled'
import { IQuery } from '../../../commons/types/generated/types';
import { ApolloQueryResult, OperationVariables } from '@apollo/client';

interface PagiNationProps {
    page : number
    setPage : (arg : number) => void
    lastPage : number
    refetchBoards : (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>
}

const Page = styled.div<{
    isCurrent : boolean
}>`
    cursor: pointer;
    text-decoration: ${(props) => props.isCurrent ? 'underline' : ''};
    color : ${(props) => props.isCurrent ? 'blue' : 'black'};
`

const Pagenation : React.FC<PagiNationProps> = ({
    page,
    setPage,
    lastPage,
    refetchBoards
}) => {
    const [startPage, setStartPage] = useState<number>(1)
    const handleClick = useCallback<React.MouseEventHandler<HTMLDivElement>>((e) => {
        setPage(+e.currentTarget.id)
        refetchBoards({
            page : +e.currentTarget.id
        })
    }, [setPage])

    const handlePrevClick : React.MouseEventHandler<HTMLDivElement> = (e) => {
        if(startPage === 1) return;
        setStartPage((prev) => prev - 10)
        setPage(startPage - 10)
        refetchBoards({
            page : startPage - 10
        });
    }

    const handleNextClick : React.MouseEventHandler<HTMLDivElement> = (e) => {
        if(startPage + 10 > Math.ceil(lastPage / 10)) return;
        setStartPage((prev) => prev + 10)
        setPage(startPage + 10)
        refetchBoards({
            page : startPage + 10
        });
    }

    return (
        <div style={{
            display : 'flex',
            columnGap : '10px',
            fontSize : '1.2rem',
        }}>
            <div
                onClick={handlePrevClick}
                style={{
                    cursor : 'pointer'
                }}
            >
                {'<'}
            </div>
           {
                new Array(10).fill(1).map((_, i) =>
                    startPage + i <= Math.ceil(lastPage/10) &&
                (
                    <Page
                        key={i}
                        id={String(startPage + i)}
                        onClick={(e) => handleClick(e)}
                        isCurrent={startPage + i === page}
                    >
                        {startPage + i}
                    </Page>
                ))
           }
            <div
                onClick={handleNextClick}
                style={{
                    cursor : 'pointer'
                }}
            >
                {'>'}
            </div>

        </div>
    );
};

export default Pagenation;