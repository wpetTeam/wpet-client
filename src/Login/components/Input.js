import React from 'react';
import '../styles/_style.scss';

const Input = (props) => {
    return (
        <>
            {props.password ? (
                <div className="input-component pw">
                    <input
                        type="password"
                        name={props.name}
                        value={props.value}
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                        placeholder={props.placeholder}
                        onKeyPress={props.onKeyPress}
                        className={props.isError ? 'error-input' : ''}
                    />
                    <label htmlFor={props.name}>{props.placeholder}</label>
                </div>
            ) : (
                <div className="input-component">
                    <input
                        name={props.name}
                        value={props.value}
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                        placeholder={props.placeholder}
                        onKeyPress={props.onKeyPress}
                        className={props.isError ? 'error-input' : ''}
                    />
                    <label htmlFor={props.name}>{props.placeholder}</label>
                </div>
            )}
        </>
    );
};
export default Input;
