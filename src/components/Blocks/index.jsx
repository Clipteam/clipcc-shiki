import * as React from 'react';
import bindAll from 'lodash.bindall';
import styles from './block.module.scss';
import Loading from '../Loading';
import initializeBlocks from '../../lib/blocks.js';
import { useAtom } from 'jotai';
import { VMJotai } from '../../jotai/instances.js';

class _ScratchBlocks extends React.Component {
    constructor () {
        super();
        this.blocksElem = React.createRef();
        this.BlocksComponentRef = React.createRef();
        bindAll(this, ['loadBlocks']);
    }
    
    async loadBlocks () {
        if (this.props.hasLoaded) console.warn('reloading blocks...');
        this.ScratchBlocks = await initializeBlocks(this.props.vm);
        this.workspace = this.ScratchBlocks.inject(this.blocksElem.current, {
            media: `static/assets/blocks-media/`,
            zoom: {
                controls: true,
                wheel: true,
                startScale: 0.675
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
        this.props.setLoaded(true);
    }
    
    componentDidMount () {
        const { hasLoaded, vm } = this.props;
        if (!hasLoaded && vm) this.loadBlocks();
    }
    
    componentDidUpdate (prevProps) {
        if (prevProps.vm !== this.props.vm) this.loadBlocks();
    }
    
    render () {
        const { hasLoaded } = this.props;
        return (
            <div ref={this.blocksElem} className={styles.container}>
                {!hasLoaded && (
                    <div className={styles.loading}>
                        <Loading size={64} />
                        <p>Loading Blocks...</p>
                    </div>
                )}
            </div>
        );
    }
}

const ScratchBlocks = (props) => {
    const [VM] = useAtom(VMJotai);
    const [loaded, setLoaded] = React.useState(false);
    return <_ScratchBlocks vm={VM} hasLoaded={loaded} setLoaded={setLoaded} {...props} />;
}

export default ScratchBlocks;
