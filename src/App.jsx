import React, { useState } from 'react';
import Header from './Containers/Header';
import Aside from './Containers/Aside';
import Content from './Containers/Content';
import { PlayerProvider } from './Context/PlayerState';

import './App.scss';

function App() {
  const [toggleAside, setToggleAside] = useState(false);

  return (
    <PlayerProvider>
      <Header toggleAside={toggleAside} setToggleAside={setToggleAside} />
      <div className='main'>
        {toggleAside ? <Aside /> : null}
        <Content />
      </div>
    </PlayerProvider>
  );
}

export default App;
