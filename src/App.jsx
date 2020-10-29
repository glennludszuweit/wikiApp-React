import React from 'react';
import Header from './Containers/Header';
import Aside from './Containers/Aside';
import Content from './Containers/Content';
import Alert from './Components/Alert';
import Message from './Components/Message';
import { PlayerProvider } from './Context/PlayerContext';
import { UIProvider } from './Context/UIContext';
import { AlertProvider } from './Context/AlertContext';
import { SearchProvider } from './Context/SearchContext';
import { MessageProvider } from './Context/MessageContext';

import './App.scss';

const App = () => {
  return (
    <PlayerProvider>
      <MessageProvider>
        <AlertProvider>
          <SearchProvider>
            <UIProvider>
              <Message />
              <Alert />
              <Header />
              <div className='main'>
                <Aside />
                <Content />
              </div>
            </UIProvider>
          </SearchProvider>
        </AlertProvider>
      </MessageProvider>
    </PlayerProvider>
  );
};

export default App;
