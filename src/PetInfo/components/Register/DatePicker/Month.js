import { SelectContainer, OptionContainer, Option } from './styles/style';
import React, { useEffect } from 'react';
import { MonthCalender } from './const/date.const';

export const Month = (props) => {
    const handleButton = () => {
        props.setShowMonth(!props.showMonth);
    };

    const handlePicker = (item) => {
        props.setShowMonth(false);
        props.setMonth(item);
    };

    useEffect(() => {}, [props.isOpen]);

    return (
        <React.Fragment>
            <SelectContainer disabled={props.disabled} onClick={handleButton}>
                {props.month}
            </SelectContainer>
            {props.showMonth && (
                <OptionContainer>
                    {MonthCalender.map((item, idx) => (
                        <Option
                            key={(idx % 30) + 29098}
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
