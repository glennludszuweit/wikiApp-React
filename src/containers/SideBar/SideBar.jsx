import React from 'react';
import PlayersList from '../../components/PlayersList/PlayersList';
import PlayersSearch from '../../components/PlayerSearch/PlayerSearch';

import './Sidebar.scss';

function SideBar({ sideBar }) {
  return (
    <div className='side-bar'>
      <PlayersSearch />
      <PlayersList />
    </div>
  );
}

export default SideBar;
