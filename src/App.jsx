import React, { useState, useEffect } from 'react';
import Header from './containers/Header';
import SideBar from './containers/SideBar';
import MainContent from './containers/MainContent';
import './App.scss';

function App() {
  const homeData = [
    {
      id: 0,
      name: 'Home',
      description:
        '<div style="text-align: center; margin: 50px;"><img style="margin: 50px auto; max-width 1200px" src="./img/home.jpg" alt="wikipedia" /></dv><h1>Welcome to Football Players Wikipedia!',
    },
  ];

  const [playersData, setPlayersData] = useState(
    JSON.parse(localStorage.getItem('players')) || homeData
  );

  const [hash, setHash] = useState(window.location.hash);
  window.onhashchange = () => {
    setHash(window.location.hash);
  };

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(playersData));
  }, [playersData]);

  return (
    <div>
      <Header />
      <div className='main'>
        <SideBar playersData={playersData} />
        <MainContent
          playersData={playersData}
          setPlayersData={setPlayersData}
          hash={hash}
        />
      </div>
    </div>
  );
}

export default App;
