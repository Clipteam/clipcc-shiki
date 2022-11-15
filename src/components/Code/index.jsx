import * as React from 'react';
import styles from './code.module.scss';
import * as monaco from 'monaco-editor';

class CodeEditor extends React.Component {
    constructor () {
        super();
        this.elem = React.createRef();
        this.monacoInstance = null;
    }
    
    componentDidMount () {
        if (this.elem.current) {
            this.monacoInstance = monaco .editor.create(this.elem.current, {
                value: 'console.log("Hello, world")',
                language: 'javascript',
                automaticLayout: true,
                overviewRulerBorder: false,
                minimap: {
                    enabled: false
                }
            });
        }
    }
    
    componentWillUnmount () {
        if (this.monacoInstance) {
            this.monacoInstance.dispose();
        }
    }
    
    render () {
        return <div className={styles.container} ref={this.elem} />;
    }
}

export default CodeEditor;
