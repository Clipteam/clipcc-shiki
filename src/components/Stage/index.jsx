import React from 'react';
import styles from './stage.module.scss';
import Button from '../Button';
import {
    Mark,
    Pause,
    Close,
    FullScreenOne,
    Lightning
} from '@icon-park/react';
import { useAtom } from 'jotai';
import { turboModeJotai } from '../../jotai/status.js';
import { VMJotai } from '../../jotai/instances.js';

const Stage = () => {
    const [VM] = useAtom(VMJotai);
    const [turboMode, setTurboMode] = useAtom(turboModeJotai);
    React.useLayoutEffect(() => {
        if (VM) {
            VM.start();
        }
    }, []);
    return (
        <div>
            <div className={styles.control}>
                <Button size='small' color='green' onClick={() => {
                    VM.greenFlag();
                }}>
                    <Mark />
                </Button>
                <div className={styles.spacer} />
                <Button size='small' color='warning'>
                    <Pause />
                </Button>
                <div className={styles.spacer} />
                <Button size='small' color='error'  onClick={() => {
                    VM.stopAll();
                }}>
                    <Close />
                </Button>
                <div className={styles.spacer} />
                {turboMode && (
                    <div className={styles.turbo}>
                        <Lightning theme="filled" /> Turbo Mode
                    </div>
                )}
                <div className={styles.elastic} />
                <Button size='small' color='primary'>
                    <FullScreenOne />
                </Button>
            </div>
            <div className={styles.stage}>
                <canvas
                    id="clipcc-stage"
                    width={480}
                    height={360}
                />
            </div>
        </div>
    );
}

export default Stage;
