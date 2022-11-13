import React from 'react';
import styles from './input.module.scss';
import classNames from 'classnames';

const Input = ({
    placeholder,
    defaultValue,
    disabled,
    onChange,
    bordered,
    width,
    type = 'text'
}) => {
    return (
        <input
            className={classNames(styles.input, {
                [styles.bordered]: !!bordered
            })}
            style={{
                width: width
            }}
            placeholder={placeholder}
            disabled={disabled}
            type={type}
            defaultValue={defaultValue}
            onChange={(e) => {
                if (onChange) onChange(e.target.value);
            }}
        />
    );
};

export default Input;
