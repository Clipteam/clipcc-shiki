import React from 'react';
import styles from './dropdown.module.scss';
import classNames from 'classnames';

const Dropdown = ({children}) => {
    const [trigger, content] = React.Children.toArray(children);
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <div onClick={() => {
                setOpen(!open);
            }}>
                {trigger}
            </div>
            {open && <div className={styles.overlay}>{content}</div>}
        </>
    );
};

const DropdownContent = ({children}) => {
    return (
        <div className={styles.card}>
            <div>
                {children}
            </div>
        </div>
    );
};

const DropdownItem = ({icon, disabled, children}) => {
    return (
        <div className={styles.item}>
            <div className={styles.icon}>
            </div>
            {children}
        </div>
    );
};

const DropdownDivider = () => {
    return <div className={styles.divider} />;
};

Dropdown.Content = DropdownContent;
Dropdown.Item = DropdownItem;
Dropdown.Divider = DropdownDivider;

export default Dropdown;
