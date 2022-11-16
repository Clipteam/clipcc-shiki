import React from 'react';
import styles from './menu.module.scss';
import classNames from 'classnames';

const Menu = ({items, open, children}) => {
    return (
        <>
            <div
                className={classNames(
                styles.menu,
                styles[open ? 'open' : 'closed'])}
            >
                {items.map((item, index) => {
                    if (item.divider) return <div key={index} className={styles.divider} />;
                    return (
                        <div className={styles.item} onClick={(e) => {
                            if (item.onClick) item.onClick(e);
                        }} key={index}>
                            <p className={styles.text}>{item.text}</p>
                        </div>
                    );
                })}
            </div>
            {children}
        </>
    );
};

export default Menu;
