import React from 'react';
import PlayerInfo from '../../components/PlayerInfo/PlayerInfo';

import './MainContent.scss';

function MainContent({ playersData, hash }) {
  return (
    <div className='content'>
      <PlayerInfo playersData={playersData} hash={hash} />
    </div>
  );
}

export default MainContent;
