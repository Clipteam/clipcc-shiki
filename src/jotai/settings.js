import { atomWithStorage } from 'jotai/utils';

export const settingsJotai = atomWithStorage('settings', {
    theme: 'system',
    disableAnimation: false,
    seamlessFullscreen: false,
    autosave: false,
    saveInterval: 120,
    fps: 30,
    compiler: false,
    hqpen: false,
    compression: 6,
    hideNonOriginalBlocks: false,
    saveSettings: false,
    saveExtensions: true,
    saveOptionalExtensions: false
});