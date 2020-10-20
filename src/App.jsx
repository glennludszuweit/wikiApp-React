import React from 'react';
import Header from './containers/Header/Header';
import SideBar from './containers/SideBar/SideBar';
import MainContent from './containers/MainContent/MainContent';
import './App.scss';

function App() {
  const [addForm, setAddForm] = React.useState(false);

  return (
    <div>
      <Header addForm={addForm} onAddFormChange={setAddForm} />
      <div className='main'>
        <SideBar />
        <MainContent addForm={addForm} />
      </div>
    </div>
  );
}

export default App;
