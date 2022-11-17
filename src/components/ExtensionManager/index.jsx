import * as React from 'react';
import bindAll from 'lodash.bindall';
import styles from './extension-manager.module.scss';
import {
    MoreApp
} from '@icon-park/react';
import builtinExtensions from '../../lib/builtin-extensions.js';
import Button from '../Button';
import Loading from '../Loading';
import axios from 'axios';
class ExtensionManager extends React.Component {
    constructor () {
        super();
        this.state = {
            localExtensions: builtinExtensions,
            onlineExtensions: [],
            error: '',
            isLoading: true
        };
        bindAll(this, ['loadExtensionsOnline']);
    }
    
    componentDidMount () {
        this.loadExtensionsOnline();
    }
    
    async loadExtensionsOnline () {
        try {
            if (!this.state.isLoading) this.setState({isLoading: true});
            const { data } = await axios.get('https://codingclip.com/extension/api/getExtension');
            this.setState({
                isLoading: false,
                onlineExtensions: data
            });
        } catch (e) {
            console.error('Error occurred while loading online extensions', e);
            this.setState({
                isLoading: false,
                error: e.message
            });
        }
    }
    
    render () {
        const {
            localExtensions,
            onlineExtensions,
            isLoading
        } = this.state;
        return (
            <div className={styles.container}>
                <p className={styles.title}><MoreApp /> Extension Manager</p>
                <p className={styles.subtitle}>Local</p>
                <div className={styles.list}>
                    {localExtensions.map((extension, index) => (
                        <div className={styles.card} key={index}>
                            <div className={styles.overlay}>
                                <p>Enable</p>
                            </div>
                            <img alt={extension.name} src={extension.iconURL} />
                            <div className={styles.info}>
                                <p className={styles.name}>
                                    {extension.name}
                                    {extension.version && <p className={styles.version}>{extension.version}</p>}
                                </p>
                                <p className={styles.detail}>Author: {
                                    Array.isArray(extension.author) ? 
                                    extension.author.join(', ') : extension.author}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className={styles.subtitle}>Online</p>
                {isLoading ? (
                    <div className={styles.loading}>
                        <Loading size={48} />
                    </div>
                ) : (
                    <div className={styles.list}>
                        {onlineExtensions.map((extension, index) => (
                            <div className={styles.card} key={index}>
                                <div className={styles.overlay}>
                                    <p>Download</p>
                                </div>
                                <img alt={extension.name} src={`https://codingclip.com/extension/extension/image/${extension.image}`} />
                                <div className={styles.info}>
                                    <p className={styles.name}>
                                        {extension.name}
                                        {extension.version && <p className={styles.version}>{extension.version}</p>}
                                    </p>
                                    <p className={styles.detail}>Author: {
                                        Array.isArray(extension.author) ? 
                                        extension.author.join(', ') : extension.author}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default ExtensionManager;
