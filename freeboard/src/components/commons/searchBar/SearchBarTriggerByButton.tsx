import React, { ChangeEvent, useCallback, useState } from 'react';

import styled from '@emotion/styled'
import DatePickerComponent from '../datePicker/DatePicker';

interface SearchBarTriggerdByButton {
    refetch : any;
    refetchCount? : any;
}

const SearchInput = styled.input`
  width: 776px;
  height: 52px;
  border: none;
  border-radius: 10px;
  background-color: #f2f2f2;
  padding-left: 48px;
`;

const SearchIcon = styled.svg`
  position: absolute;
  left: 19px;
  top: 50%;
  transform: translateY(-50%);
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 16px;
    background: #000000;
    color : white;
    flex-wrap: nowrap;
    cursor: pointer;

    &:hover {
        border: 2px solid white;
    }
`


const SearchBarTriggerdByButton : React.FC<SearchBarTriggerdByButton> = ({
    refetch,
    refetchCount
}) => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [startDate, setStartDate] = useState(new Date('2020-01-01'))
    const [endDate, setEndDate] = useState(new Date())

    const onChangeInput = useCallback((value : string) => {
        setSearchTerm(value)
    }, [setSearchTerm])

    const onClickButton = () => {
        refetch({
            search : searchTerm,
            startDate,
            endDate,
        })
        refetchCount?.({
            search : searchTerm,
            startDate,
            endDate,
        })
    }
    return (
        <div style={{display : 'flex', columnGap : '1rem'}}>
            <SearchIcon
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                fill="black"
            />
            </SearchIcon>

            <SearchInput placeholder="제목을 검색해주세요." onChange={(e) => onChangeInput(e.target.value)} />
            <DatePickerComponent
                endDate={endDate}
                setEndDate={setEndDate}
                startDate={startDate}
                setStartDate={setStartDate}
            />
            <Button onClick={onClickButton}>
                <i className="ri-search-line"></i>
            </Button>
        </div>
    );
};

export default SearchBarTriggerdByButton;