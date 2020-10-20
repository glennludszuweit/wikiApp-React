import React from 'react';

import './Sidebar.scss';

class SideBar extends React.Component {
  render() {
    return (
      <div>
        <div className='side-bar'>
          <div className='search-container'>
            <input type='search' id='search' placeholder='search player' />
          </div>
          <ul className='names'>
            <li className='name'>Leo Messi</li>
            <li className='name'>Cristiano Ronaldo</li>
            <li className='name'>Neymar Jr.</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBar;
