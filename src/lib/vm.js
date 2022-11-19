import VirtualMachine from 'clipcc-vm';
import ScratchStorage from 'scratch-storage';
import AudioEngine from 'scratch-audio';
import ScratchSVGRenderer from 'scratch-svg-renderer';

export default function initializeVM () {
    const vm = new VirtualMachine({
        appVersion: '3.2-shiki'
    });
    
    
    // Initialize storage
    const storage = new ScratchStorage();
    vm.attachStorage(storage);
    
    const audioEngine = new AudioEngine();
    vm.attachAudioEngine(audioEngine);
    vm.attachV2BitmapAdapter(new ScratchSVGRenderer.BitmapAdapter());
    window.vm = vm; // debug
    return vm;
};