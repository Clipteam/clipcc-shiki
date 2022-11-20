import React from 'react';
import styles from './switch.module.scss';
import classNames from 'classnames';

const Switch = ({
    disabled,
    defaultValue,
    onChange
}) => {
    return (
        <label className={classNames(styles.switch, {
            [styles.disabled]: disabled
        })}>
            <input
                className={styles.input}
                checked={defaultValue}
                disabled={disabled}
                onChange={(e) => {
                    if (onChange) onChange(e.target.checked);
                }}
                type="checkbox"
            />
            <span className={styles.slider} />
        </label>
    );
};

export default Switch;
