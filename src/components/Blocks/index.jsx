import * as React from 'react';
import bindAll from 'lodash.bindall';
import styles from './block.module.scss';
class ScratchBlocks extends React.Component {
    constructor () {
        super();
        this.state = {
            hasLoaded: false
        };
        this.Blocks = null;
        this.BlocksComponentRef = React.createRef();
        bindAll(this, ['loadBlocks']);
    }
    
    async loadBlocks () {
        // idk but cannot work
        /*
        if (this.state.hasLoaded) console.warn('reloading blocks...');
        import('scratch-blocks').then(data => {
            this.Blocks = data.default;
            this.setState({hasLoaded: true});
        });
        */
    }
    
    componentDidUpdate (prevProps, prevState) {
        if (prevState.hasLoaded !== this.state.hasLoaded) {
            if (this.BlocksComponentRef.current) {
                console.log(this);
            }
        }
    }
    
    render () {
        const { hasLoaded } = this.state;
        if (!hasLoaded) this.loadBlocks();
        return (
            <div ref={this.BlocksComponentRef} className={styles.container}>
                {hasLoaded ? this.Blocks : 'WIP blocks'}
            </div>
        );
    }
}

export default ScratchBlocks;
