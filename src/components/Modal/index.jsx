import React from 'react';
import styles from './modal.module.scss';
import classNames from 'classnames';
import Button from '../Button';
import {
    InboxOut,
    Close
} from '@icon-park/react';

const Modal = ({visible, onClose, title, children, className}) => {
    if (!visible) return <div />;
    
    return (
        <div className={classNames(styles.overlay, className)} onClick={onClose}>
            <div className={styles.card}>
                <div className={styles.top}>
                    <div className={styles.spacer} />
                    <span className={styles.title}>{title}</span>
                    <Button onClick={onClose} className={styles.close} size="small">
                        <Close />
                    </Button>
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
