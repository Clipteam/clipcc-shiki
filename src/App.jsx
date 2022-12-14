import { useState, useLayoutEffect } from 'react';
import MenuBar from './components/MenuBar';
import AboutModal from './components/AboutModal';
import MainArea from './components/MainArea';
import './App.scss';
import '@icon-park/react/styles/index.css';

import initializeVM from './lib/vm.js';
import { useAtom } from 'jotai';
import { aboutModalJotai } from './jotai/modal.js';
import { VMJotai } from './jotai/instances.js';

const App = () => {
  const [aboutModalOpen] = useAtom(aboutModalJotai);
  const [VM, setVM] = useAtom(VMJotai);
  const [loaded, setLoaded] = useState(false);
  
  // load vm before rendering
  useLayoutEffect(() => {
      if (!VM) {
          setVM(initializeVM());
          setLoaded(true);
      }
      return () => {
          // Recycle vm
          if (VM) {
            VM.dispose();
            setVM(null);
          }
      };
  }, []);

  if (!loaded) return <></>;
  return (
    <div className="App">
      <AboutModal visible={aboutModalOpen} />
      <MenuBar />
      <MainArea />
    </div>
  );
}

export default App;
