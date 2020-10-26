import React from 'react';
import Players from '../Components/Players';
import Search from '../Components/Search';

function SideBar() {
  return (
    <div className='side-bar'>
      <Search />
      <Players />
    </div>
  );
}

export default SideBar;
