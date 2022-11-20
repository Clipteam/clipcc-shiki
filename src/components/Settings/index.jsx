import React from 'react';
import styles from './settings.module.scss';
import {
    Setting
} from '@icon-park/react';
import Switch from '../Switch';
import Select from '../Select';
import Input from '../Input';
import { settingsJotai } from '../../jotai/settings.js';
import { useAtom } from 'jotai';

const Settings = () => {
    const [settings, _setSettings] = useAtom(settingsJotai);
    const setSettings = (key, value) => {
        const modifiedSettings = Object.assign({}, settings);
        modifiedSettings[key] = value;
        _setSettings(modifiedSettings);
    };
    const appearance = {
        title: 'Appearance',
        items: [{
            id: 'theme',
            label: 'Theme',
            type: 'select',
            options: [{
                id: 'system',
                text: 'Follow system'
            }, {
                id: 'light',
                text: 'Light'
            }, {
                id: 'dark',
                text: 'Dark'
            }],
            default: settings.theme
        }, {
            id: 'disableAnimation',
            label: 'Disable Animation',
            type: 'switch',
            default: settings.disableAnimation
        }, {
            id: 'seamlessFullscreen',
            label: 'Seamless Fullscreen',
            type: 'switch',
            default: settings.seamlessFullscreen
        }]
    };
    const runtime = {
        title: 'Runtime',
        items: [{
            id: 'fps',
            label: 'FPS',
            type: 'number',
            width: 60,
            placeholder: '30',
            default: settings.fps
        }, {
            id: 'compiler',
            label: 'Compiler',
            type: 'switch',
            default: settings.compiler
        }, {
            id: 'warpTimer',
            label: 'Warp Timer',
            type: 'switch',
            default: settings.warpTimer
        }, {
            id: 'hqpen',
            label: 'High-Quality Pen',
            type: 'switch',
            default: settings.hqpen
        }, {
            id: 'removeLimits',
            label: 'Remove Miscellaneous Limits',
            type: 'switch',
            default: settings.removeLimits
        }]
    };
    const project = {
        title: 'Project',
        items: [{
            id: 'autoSave',
            label: 'Auto save',
            type: 'switch',
            default: settings.autoSave
        }, {
            id: 'saveInternal',
            label: 'Save Internal',
            type: 'number',
            width: 60,
            placeholder: '120',
            default: settings.saveInterval,
            disabled: !settings.autoSave
        }, {
            id: 'saveSettings',
            label: 'Save Settings to Project',
            type: 'switch',
            default: settings.saveSettings
        }, {
            id: 'saveExtensions',
            label: 'Save Extensions to Project',
            type: 'switch',
            default: settings.saveExtensions
        }, , {
            id: 'saveOptionalExtensions',
            label: 'Save Optional Exrensions to Project',
            type: 'switch',
            default: settings.saveOptionalExtensions
        }]
    };
    const blocks = {
        title: 'Blocks',
        items: [{
            id: 'collapseFlyout',
            label: 'Collapse flyout',
            type: 'switch',
            default: settings.collapseFlyout
        }, {
            id: 'smoothScrolling',
            label: 'Smooth Scrolling',
            type: 'switch',
            default: settings.smoothScrolling
        }]
    };
    
    const reflector = (item, index) => {
        switch (item.type) {
            case 'select':
                return (
                    <div className={styles.item} key={index}>
                        <p className={styles.name}>
                            {item.label}
                        </p>
                        <Select
                            value={item.default}
                            options={item.options}
                            disabled={item.disabled}
                            onChange={(value) => {
                                if (item.onChange) item.onChange(value);
                                setSettings(item.id, value);
                            }}
                        />
                    </div>
                );
            case 'switch':
                return (
                    <div className={styles.item} key={index}>
                        <p className={styles.name}>
                            {item.label}
                        </p>
                        <Switch
                            defaultValue={item.default}
                            disabled={item.disabled}
                            onChange={(checked) => {
                                if (item.onChange) item.onChange(checked);
                                setSettings(item.id, checked);
                            }}
                        />
                    </div>
                );
            case 'number':
                return (
                    <div className={styles.item} key={index}>
                        <p className={styles.name}>
                            {item.label}
                        </p>
                        <Input
                            defaultValue={item.default}
                            width={item.width}
                            type='number'
                            placeholder={item.placeholder}
                            disabled={item.disabled}
                            onChange={(value) => {
                                if (item.onChange) item.onChange(value);
                                setSettings(item.id, value);
                            }}
                        />
                    </div>
                );
                case 'string':
                return (
                    <div className={styles.item} key={index}>
                        <p className={styles.name}>
                            {item.label}
                        </p>
                        <Input
                            defaultValue={item.default}
                            width={item.width}
                            placeholder={item.placeholder}
                            disabled={item.disabled}
                            onChange={(value) => {
                                if (item.onChange) item.onChange(value);
                                setSettings(item.id, value);
                            }}
                        />
                    </div>
                );
            default: console.warn('unknown settings item:', item);
        }
    };
    return (
        <div className={styles.container}>
            <p className={styles.title}><Setting /> Options</p>
            <p className={styles.subtitle}>{appearance.title}</p>
            <div className={styles.list}>
                {appearance.items.map(reflector)}
            </div>
            <p className={styles.subtitle}>{runtime.title}</p>
            <div className={styles.list}>
                {runtime.items.map(reflector)}
            </div>
            <p className={styles.subtitle}>{project.title}</p>
            <div className={styles.list}>
                {project.items.map(reflector)}
            </div>
            <p className={styles.subtitle}>{blocks.title}</p>
            <div className={styles.list}>
                {blocks.items.map(reflector)}
            </div>
        </div>
    );
};

export default Settings;
