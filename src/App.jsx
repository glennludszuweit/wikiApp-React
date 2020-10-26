import React from 'react';
import Header from './Containers/Header';
import SideBar from './Containers/SideBar';
import Content from './Containers/Content';
import { PlayerProvider } from './Context/PlayerState';

import './App.scss';

function App() {
  return (
    <PlayerProvider>
      <Header />
      <div className='main'>
        <SideBar />
        <Content />
      </div>
    </PlayerProvider>
  );
}

export default App;
