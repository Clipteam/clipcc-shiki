import React from 'react';
import styles from './sidebar.module.scss';
import Button from '../Button';
import {
    Code,
    Platte,
    SoundWave,
    MoreApp,
    Setting,
    Search,
    BlockNine
} from '@icon-park/react';

const Sidebar = ({selecting, onChange}) => {
    return (
        <div className={styles.container}>
            <Button
                size='square'
                disabled
                useShadow={selecting ==='code'}
                color={selecting ==='code' && 'primary'}
                onClick={() => {
                    if (onChange && selecting !== 'code') onChange('code');
                }}
            >
                <Code size='1.6em' className={styles.icon} />
            </Button>
            <Button
                size='square'
                useShadow={selecting ==='block'}
                color={selecting ==='block' && 'primary'}
                onClick={() => {
                    if (onChange && selecting !== 'block') onChange('block');
                }}
            >
                <BlockNine size='1.6em' className={styles.icon} />
            </Button>
            <Button
                size='square'
                disabled
                useShadow={selecting ==='search'}
                color={selecting ==='search' && 'primary'}
                onClick={() => {
                    if (onChange && selecting !== 'search') onChange('search');
                }}
            >
                <Search size='1.6em' className={styles.icon} />
            </Button>
            {/*<div className={styles.spacer} /> */}
            <Button
                size='square'
                disabled
                useShadow={selecting ==='paint'}
                color={selecting ==='paint' && 'primary'}
                onClick={() => {
                    if (onChange && selecting !== 'paint') onChange('paint');
                }}
            >
                <Platte size='1.6em' className={styles.icon} />
            </Button>
            <Button
                size='square'
                disabled
                useShadow={selecting ==='sound'}
                color={selecting ==='sound' && 'primary'}
                onClick={() => {
                    if (onChange && selecting !== 'sound') onChange('sound');
                }}
            >
                <SoundWave size='1.6em' className={styles.icon} />
            </Button>
            <Button
                size='square'
                useShadow={selecting ==='extension'}
                color={selecting ==='extension' && 'primary'}
                onClick={() => {
                    if (onChange && selecting !== 'extension') onChange('extension');
                }}
            >
                <MoreApp size='1.6em' className={styles.icon} />
            </Button>
            <Button
                size='square'
                useShadow={selecting ==='options'}
                color={selecting ==='options' && 'primary'}
                onClick={() => {
                    if (onChange && selecting !== 'options') onChange('options');
                }}
            >
                <Setting size='1.6em' className={styles.icon} />
            </Button>
        </div>
    );
};

export default Sidebar;
