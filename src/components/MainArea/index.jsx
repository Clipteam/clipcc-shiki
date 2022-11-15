import React from 'react';
import styles from './mainarea.module.scss';
import Sidebar from '../Sidebar';
import Blocks from '../Blocks';
import ExtensionManager from '../ExtensionManager';
import Settings from '../Settings';
import CodeEditor from '../Code';
import PaintEditor from '../PaintEditor';
import Stage from '../Stage';
import TargetPane from '../TargetPane';

const MainArea = ({
    
}) => {
    const [selected, setSelected] = React.useState('block');
    return (
        <div className={styles.container}>
            <Sidebar
                selecting={selected}
                onChange={(option) => {
                    setSelected(option);
                }}
            />
            <div className={styles.spacer} />
            {selected === 'block' && <Blocks />}
            {selected === 'code' && <CodeEditor />}
            {selected === 'paint' && <PaintEditor />}
            {selected === 'extension' && <ExtensionManager />}
            {selected === 'options' && <Settings />}
            <div className={styles.spacer} />
            <div className={styles.column}>
                <div className={styles.stageCard}>
                    <Stage />
                </div>
                <div className={styles.targetCard}>
                    <TargetPane />
                </div>
            </div>
        </div>
    );
};

export default MainArea;
