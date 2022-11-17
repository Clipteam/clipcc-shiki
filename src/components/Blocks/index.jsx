import * as React from 'react';
import bindAll from 'lodash.bindall';
import styles from './block.module.scss';
import Loading from '../Loading';
import initializeBlocks from '../../lib/blocks.js';
import { useAtom } from 'jotai';
import { VMJotai, BlockJotai } from '../../jotai/instances.js';

class _ScratchBlocks extends React.Component {
    constructor () {
        super();
        this.blocksElem = React.createRef();
        this.BlocksComponentRef = React.createRef();
        bindAll(this, ['loadBlocks', 'handleResize']);
    }
    
    handleResize () {
        window.dispatchEvent(new Event('resize'));
    }
    
    async loadBlocks () {
        if (this.props.hasLoaded) console.warn('reloading blocks...');
        this.ScratchBlocks = await initializeBlocks(this.props.vm);
        this.blocksElem.current.addEventListener('resize', this.handleResize);
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
        
        // we actually never want the workspace to enable "refresh toolbox" - this basically re-renders the
        // entire toolbox every time we reset the workspace.  We call updateToolbox as a part of
        // componentDidUpdate so the toolbox will still correctly be updated
        this.setToolboxRefreshEnabled = this.workspace.setToolboxRefreshEnabled.bind(this.workspace);
        this.workspace.setToolboxRefreshEnabled = () => {
            this.setToolboxRefreshEnabled(false);
        };

        this.props.setBlockInstance(this.ScratchBlocks);
        this.props.setLoaded(true);
    }
    
    componentDidMount () {
        const { hasLoaded, vm } = this.props;
        if (!hasLoaded && vm) this.loadBlocks();
    }
    
    componentDidUpdate (prevProps) {
        if (prevProps.vm !== this.props.vm) this.loadBlocks();
        window.dispatchEvent(new Event('resize'));
    }
    
    componentWillUnmount () {
        this.blocksElem.current.removeEventListener('resize', this.handleResize);
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
    const [Block, setBlock] = useAtom(BlockJotai);
    const [loaded, setLoaded] = React.useState(false);
    return (
        <_ScratchBlocks
            vm={VM}
            hasLoaded={loaded}
            setLoaded={setLoaded}
            setBlockInstance={setBlock}
            {...props}
        />);
}

export default ScratchBlocks;
