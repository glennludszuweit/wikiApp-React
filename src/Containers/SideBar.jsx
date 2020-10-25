import React from 'react';
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div className='side-bar'>
      <div className='search-container'>
        <input type='search' id='search' placeholder='search player' />
      </div>

      <ul className='names'>
        <Link to='/:id'>
          <li className='name'>player name</li>
        </Link>
      </ul>
    </div>
  );
}

export default SideBar;
