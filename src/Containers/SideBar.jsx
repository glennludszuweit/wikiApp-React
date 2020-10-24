import React from 'react';
import PlayersList from '../Components/PlayersList';
import PlayersSearch from '../Components/PlayerSearch';

function SideBar() {
  return (
    <div className='side-bar'>
      <PlayersSearch />
      <PlayersList />
    </div>
  );
}

export default SideBar;
