import React, { forwardRef, useRef } from 'react';
import DatePicker from "react-datepicker";

interface DatePickerProps {
    startDate : Date;
    setStartDate : any;
    endDate : Date;
    setEndDate : any
}


const DatePickerComponent : React.FC<DatePickerProps>= ({
    endDate,
    startDate,
    setEndDate,
    setStartDate
}) => {

    return (
        <div style={{display : 'flex', columnGap : '1rem'}}>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat='yyyy.MM.dd'
                maxDate={new Date()}
                minDate={new Date('2020-01-01')}
                shouldCloseOnSelect
                popperPlacement="top-start"
            />
            <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date) }
                dateFormat='yyyy.MM.dd'
                maxDate={new Date()}
                minDate={new Date('2020-01-01')}
                shouldCloseOnSelect
                popperPlacement="top-start"
            />
        </div>
    );
};

export default DatePickerComponent;