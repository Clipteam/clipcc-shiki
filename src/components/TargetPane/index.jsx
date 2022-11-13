import React from 'react';
import styles from './target-pane.module.scss';
import Input from '../Input';
import { Backpack } from 'react-kawaii';

const TargetPane = ({
    placeholder,
    defaultValue,
    disabled,
    onChange,
    type = 'text'
}) => {
    return (
        <>
            <div className={styles.pane}>
                <div className={styles.unit}>
                    <p className={styles.label}>Name</p>
                    <Input
                        placeholder='Sparrow'
                        width='100px'
                    />
                </div>
                <div className={styles.unit}>
                    <p className={styles.label}>X</p>
                    <Input
                        type='number'
                        placeholder={0}
                        width='30px'
                    />
                </div>
                <div className={styles.unit}>
                    <p className={styles.label}>Y</p>
                    <Input
                        type='number'
                        placeholder={0}
                        width='30px'
                    />
                </div>
                <div className={styles.unit}>
                    <p className={styles.label}>Size</p>
                    <Input
                        type='number'
                        placeholder={0}
                        width='30px'
                    />
                </div>
            </div>
            <div className={styles.empty}>
                <Backpack size={100} mood="shocked" color="#FFD882" />
                <p className={styles.tips}>The container is empty</p>
                <p className={styles.tips}>Come and fill here</p>
            </div>
        </>
    );
};

export default TargetPane;
