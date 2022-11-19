import { useState, useLayoutEffect, useRef } from 'react';
import bindAll from 'lodash.bindall';
import styles from './block.module.scss';
import Loading from '../Loading';
import initializeBlocks from '../../lib/blocks.js';
import { useAtom } from 'jotai';
import { VMJotai, BlockJotai } from '../../jotai/instances.js';

const ScratchBlocks = (props) => {
    const [VM] = useAtom(VMJotai);
    const [Block, setBlock] = useAtom(BlockJotai);
    const blocksElem = useRef();
    const [loaded, setLoaded] = useState(false);
    let workspace = null;
    
    useLayoutEffect(() => {
        async function loadBlocks () {
            const ScratchBlocks = await initializeBlocks(VM);
            workspace = ScratchBlocks.inject(blocksElem.current, {
                media: `static/assets/blocks-media/`,
                zoom: {
                    controls: true,
                    wheel: true,
                    startScale: 0.625
                },
                grid: {
                    spacing: 40,
                    length: 2,
                    colour: '#ddd'
                },
                colours: {
                    workspace: '#F9F9F9',
                    flyout: '#F9F9F9',
                    toolbox: '#FFFFFF',
                    toolboxSelected: '#E9EEF2',
                    scrollbar: '#CECDCE',
                    scrollbarHover: '#CECDCE',
                    insertionMarker: '#000000',
                    insertionMarkerOpacity: 0.2,
                    fieldShadow: 'rgba(255, 255, 255, 0.3)',
                    dragShadowOpacity: 0.6
                },
                comments: true,
                collapse: false,
                sounds: false
            });

            setBlock(ScratchBlocks);
            setLoaded(true);
        }
        if (!loaded) loadBlocks();
        window.dispatchEvent(new Event('resize'));
        return () => {
            if (workspace) workspace.dispose();
        };
    }, []);
    
    return (
        <div ref={blocksElem} className={styles.container}>
            {!loaded && (
                <div className={styles.loading}>
                    <Loading size={64} />
                    <p>Loading Blocks...</p>
                </div>
            )}
        </div>
    );
}

export default ScratchBlocks;
