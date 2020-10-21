import React from 'react';
import toggleImg from '../../images/ball.png';
import logo from '../../images/logo.png';

import './Header.scss';

function Header() {
  return (
    <div>
      <div className='header'>
        <img className='toggle' src={toggleImg} alt='menu' />
        <img src={logo} alt='logo' />
        <a href='#add'>
          <i className='fas fa-plus' id='add-button'></i>
        </a>
      </div>
    </div>
  );
}

export default Header;
