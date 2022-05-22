import React, { useEffect, useState } from 'react';
import { Container, Text } from './styles/style';
import { Month } from './Month';
import { Date } from './Date';

const DatePicker = (props) => {
    const [showMonth, setShowMonth] = useState(false);
    const [showDate, setShowDate] = useState(false);

    useEffect(() => {}, [props.month, props.date]);

    return (
        <Container>
            {props.type === 'month' && (
                <Month
                    month={props.month}
                    setMonth={props.setMonth}
                    showMonth={showMonth}
                    setShowMonth={setShowMonth}
                    disabled={props.disabled}
                />
            )}
            {props.type === 'date' && (
                <Date
                    month={props.month}
                    date={props.date}
                    setDate={props.setDate}
                    showDate={showDate}
                    setShowDate={setShowDate}
                    disabled={props.disabled}
                />
            )}
            <Text>{props.text}</Text>
        </Container>
    );
};

export default DatePicker;
