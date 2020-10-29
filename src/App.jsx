import React from 'react';
import Header from './Containers/Header';
import Aside from './Containers/Aside';
import Content from './Containers/Content';
import Alert from './Components/Alert';
import { PlayerProvider } from './Context/PlayerContext';
import { UIProvider } from './Context/UIContext';

import './App.scss';
import { AlertProvider } from './Context/AlertContext';
import { SearchProvider } from './Context/SearchContext';

const App = () => {
  return (
    <PlayerProvider>
      <UIProvider>
        <AlertProvider>
          <SearchProvider>
            <Alert />
            <Header />
            <div className='main'>
              <Aside />
              <Content />
            </div>
          </SearchProvider>
        </AlertProvider>
      </UIProvider>
    </PlayerProvider>
  );
};

export default App;
