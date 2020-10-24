import React from 'react';
import toggle from '../Images/ball.png';
import logo from '../Images/logo.png';

function Header() {
  return (
    <div>
      <div className='header'>
        <img className='toggle' src={toggle} alt='menu' />
        <img src={logo} alt='logo' />

        <i className='fas fa-plus' id='add-button'></i>
      </div>
    </div>
  );
}

export default Header;
