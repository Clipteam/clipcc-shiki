import { useState } from 'react';
import MenuBar from './components/MenuBar';
import AboutModal from './components/AboutModal';
import MainArea from './components/MainArea';
import './App.scss';
import '@icon-park/react/styles/index.css';

import { useAtom } from 'jotai';
import { aboutModalJotai } from './jotai/modal.js';

function App () {
  const [aboutModalOpen] = useAtom(aboutModalJotai);

  return (
    <div className="App">
      <AboutModal visible={aboutModalOpen} />
      <MenuBar />
      <MainArea />
    </div>
  );
}

export default App;
