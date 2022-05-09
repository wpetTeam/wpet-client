import { SelectContainer, OptionContainer, Option } from './styles/style';
import React from 'react';
import { MonthCalender } from './const/date.const';

export const Month = (props) => {
    const handleButton = () => {
        props.setShowMonth(!props.showMonth);
    };

    const handlePicker = (item) => {
        props.setShowMonth(false);
        props.setMonth(item);
    };

    return (
        <>
            <SelectContainer onClick={handleButton}>
                {props.month}
            </SelectContainer>
            {props.showMonth && (
                <OptionContainer>
                    {MonthCalender.map((item, idx) => (
                        <Option onClick={() => handlePicker(item)}>
                            {item}
                        </Option>
                    ))}
                </OptionContainer>
            )}
        </>
    );
};
