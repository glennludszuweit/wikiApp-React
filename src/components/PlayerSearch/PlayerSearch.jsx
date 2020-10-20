import React from 'react';

import './PlayersSearch.scss';

function PlayerSearch() {
  return (
    <div className='search-container'>
      <input type='search' id='search' placeholder='search player' />
    </div>
  );
}

export default PlayerSearch;
