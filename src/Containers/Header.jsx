import React from 'react';
import { Link } from 'react-router-dom';
import toggle from '../Images/ball.png';
import logo from '../Images/logo.png';

function Header() {
  return (
    <div>
      <div className='header'>
        <img className='toggle' src={toggle} alt='menu' />
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
        <Link to='/add'>
          <i className='fas fa-plus' id='add-button'></i>
        </Link>
      </div>
    </div>
  );
}

export default Header;
