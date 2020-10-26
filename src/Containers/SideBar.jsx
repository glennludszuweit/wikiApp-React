import React from 'react';
import PlayersList from '../Components/Players';
import Search from '../Components/Search';

function SideBar() {
  return (
    <div className='side-bar'>
      <Search />
      <PlayersList />
    </div>
  );
}

export default SideBar;
