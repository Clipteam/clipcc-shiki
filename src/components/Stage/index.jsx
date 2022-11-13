import * as React from 'react';
import styles from './stage.module.scss';
import Button from '../Button';
import {
    Mark,
    Pause,
    Close,
    FullScreenOne
} from '@icon-park/react';

class Stage extends React.Component {
    render () {
        return (
            <div>
                <div className={styles.control}>
                    <Button size='small' color='green'>
                        <Mark />
                    </Button>
                    <div className={styles.spacer} />
                    <Button size='small' color='warning'>
                        <Pause />
                    </Button>
                    <div className={styles.spacer} />
                    <Button size='small' color='error'>
                        <Close />
                    </Button>
                    <div className={styles.elastic} />
                    <Button size='small' color='primary'>
                        <FullScreenOne />
                    </Button>
                </div>
                <div className={styles.stage}>
                    <canvas />
                </div>
            </div>
        );
    }
}

export default Stage;
