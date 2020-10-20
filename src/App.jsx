import React from 'react';
import Header from './containers/Header/Header';
import SideBar from './containers/SideBar/SideBar';
import MainContent from './containers/MainContent/MainContent';
import './App.scss';

const playersData = JSON.parse(localStorage.getItem('players')) || {};

function App() {
  const [sideBar, setSideBar] = React.useState(true);
  const [addForm, setAddForm] = React.useState(false);
  const [players, setPlayers] = React.useState(playersData);

  return (
    <div>
      <Header
        showAddForm={setAddForm}
        sideBar={sideBar}
        showSideBar={setSideBar}
      />
      <div className='main'>
        <SideBar sideBar={sideBar} />
        <MainContent addForm={addForm} />
      </div>
    </div>
  );
}

export default App;
