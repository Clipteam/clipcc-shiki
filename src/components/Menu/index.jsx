import React from 'react';
import styles from './menu.module.scss';
import classNames from 'classnames';

const Menu = ({items, open, children}) => {
    return (
        <>
            {children}
            <div
                className={classNames(
                styles.menu,
                styles[open ? 'open' : 'closed'])}
            >
                {items.map((item, index) => (
                    <div className={styles.item} onClick={() => {
                        if (item.onClick) item.onClick();
                    }}>
                        <p className={styles.text}>{item.text}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Menu;
