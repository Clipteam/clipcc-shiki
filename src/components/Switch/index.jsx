import React from 'react';
import styles from './switch.module.scss';

const Switch = ({
    disabled,
    defaultValue,
    onChange
}) => {
    return (
        <label className={styles.switch}>
            <input
                className={styles.input}
                checked={defaultValue}
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
