import React from 'react';
import Header from './Containers/Header';
import Aside from './Containers/Aside';
import Content from './Containers/Content';
import { PlayerProvider } from './Context/PlayerContext';
import { UIProvider } from './Context/UIContext';

import './App.scss';
import Alert from './Components/Alert';

const App = () => {
  return (
    <PlayerProvider>
      <UIProvider>
        <Alert />
        <Header />
        <div className='main'>
          <Aside />
          <Content />
        </div>
      </UIProvider>
    </PlayerProvider>
  );
};

export default App;
