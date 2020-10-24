import React from 'react';
import Header from './Containers/Header';
import SideBar from './Containers/SideBar';
import MainContent from './Containers/MainContent';
import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <div className='main'>
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
