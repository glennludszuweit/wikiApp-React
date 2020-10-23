import React from 'react';
import PlayersList from '../components/PlayersList';
import PlayersSearch from '../components/PlayerSearch';

function SideBar({ playersData }) {
  return (
    <div className='side-bar'>
      <PlayersSearch />
      <PlayersList playersData={playersData} />
    </div>
  );
}

export default SideBar;
