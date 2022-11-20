import React from 'react';
import styles from './input.module.scss';
import classNames from 'classnames';

const Input = ({
    placeholder,
    defaultValue,
    disabled,
    onChange,
    width,
    type = 'text'
}) => {
    return (
        <input
            className={classNames(styles.input, {
                [styles.disabled]: disabled
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
