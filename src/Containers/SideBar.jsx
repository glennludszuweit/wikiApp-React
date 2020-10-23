import React from 'react';
import PlayersList from '../Components/PlayersList';
import PlayersSearch from '../Components/PlayerSearch';

function SideBar({ playersData }) {
  return (
    <div className='side-bar'>
      <PlayersSearch />
      <PlayersList playersData={playersData} />
    </div>
  );
}

export default SideBar;
