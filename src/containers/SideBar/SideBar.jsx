import React from 'react';
import PlayersList from '../../components/PlayersList/PlayersList';
import PlayersSearch from '../../components/PlayerSearch/PlayerSearch';

import './Sidebar.scss';

function SideBar({ playersData }) {
  return (
    <div className='side-bar'>
      <PlayersSearch />
      <PlayersList playersData={playersData} />
    </div>
  );
}

export default SideBar;
