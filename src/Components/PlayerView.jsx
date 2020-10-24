import React from 'react';
import { Link } from 'react-router-dom';

function PlayerInfo() {
  return (
    <div>
      <div className='content-heading'>
        <h2 className='player-name'>Player name</h2>
        <div className='icons'>
          <Link to='/edit/:id'>
            <i className='fas fa-edit edit-button'></i>
          </Link>
          <Link to='/'>
            <i className='fas fa-trash delete'></i>
          </Link>
        </div>
      </div>

      <div className='player-info'>Player description</div>
    </div>
  );
}

export default PlayerInfo;
