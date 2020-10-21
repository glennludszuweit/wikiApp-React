import React, { useState } from 'react';
import Header from './containers/Header/Header';
import SideBar from './containers/SideBar/SideBar';
import MainContent from './containers/MainContent/MainContent';
import './App.scss';

function App() {
  const [playersData] = useState(JSON.parse(localStorage.getItem('players')));

  let [hash, setHash] = useState(window.location.hash);
  window.onhashchange = () => {
    setHash(window.location.hash);
  };

  return (
    <div>
      <Header />
      <div className='main'>
        <SideBar playersData={playersData} />
        <MainContent playersData={playersData} hash={hash} />
      </div>
    </div>
  );
}

export default App;
