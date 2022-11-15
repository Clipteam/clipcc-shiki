import VirtualMachine from 'clipcc-vm';
import ScratchRender from 'clipcc-render';
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
    
    // Instantiate the renderer and connect it to the VM.
    const canvas = document.getElementById('clipcc-stage');
    const renderer = new ScratchRender(canvas);
    vm.attachRenderer(renderer);
    const audioEngine = new AudioEngine();
    vm.attachAudioEngine(audioEngine);
    vm.attachV2BitmapAdapter(new ScratchSVGRenderer.BitmapAdapter());
    window.vm = vm; // debug
    return vm;
};