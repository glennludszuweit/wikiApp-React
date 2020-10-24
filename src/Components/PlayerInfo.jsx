import React from 'react';

function PlayerInfo() {
  return (
    <div>
      <div className='content-heading'>
        <h2 className='player-name'>Player name</h2>
        <div className='icons'>
          <i className='fas fa-edit edit-button'></i>
          <i className='fas fa-trash delete'></i>
        </div>
      </div>

      <div className='player-info'>Player description</div>
    </div>
  );
}

export default PlayerInfo;
