import React from 'react';
import Header from './Containers/Header';
import Aside from './Containers/Aside';
import Content from './Containers/Content';
import { PlayerProvider } from './Context/PlayerState';

import './App.scss';

function App() {
  return (
    <PlayerProvider>
      <Header />
      <div className='main'>
        <Aside />
        <Content />
      </div>
    </PlayerProvider>
  );
}

export default App;
