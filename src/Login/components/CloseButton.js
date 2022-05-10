import { IoIosClose } from 'react-icons/io';
import React from 'react';

export const CloseButton = (props) => {
    return <IoIosClose onClick={props.onClick} />;
};
