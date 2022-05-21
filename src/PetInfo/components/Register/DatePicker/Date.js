import { SelectContainer, OptionContainer, Option } from './styles/style';
import React from 'react';
import { DateCalender } from './const/date.const';

export const Date = (props) => {
    const handleButton = () => {
        props.setShowDate(!props.showDate);
    };

    const handlePicker = (item) => {
        props.setShowDate(false);
        props.setDate(item);
    };
    const dateCalender = DateCalender(props.month);

    return (
        <React.Fragment>
            <SelectContainer disabled={props.disabled} onClick={handleButton}>
                {props.date}
            </SelectContainer>
            {props.showDate && (
                <OptionContainer>
                    {dateCalender.map((item, idx) => (
                        <Option
                            key={(idx % 31) + 22314}
                            onClick={() => handlePicker(item)}
                        >
                            {item}
                        </Option>
                    ))}
                </OptionContainer>
            )}
        </React.Fragment>
    );
};
