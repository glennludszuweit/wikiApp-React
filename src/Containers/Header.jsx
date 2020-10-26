import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toggle from '../Images/ball.png';
import logo from '../Images/logo.png';
import Aside from './Aside';

function Header({ toggleAside, setToggleAside }) {
  const onToggle = () => {
    setToggleAside(!toggleAside);
  };

  return (
    <div>
      <div className='header'>
        <img className='toggle' src={toggle} alt='menu' onClick={onToggle} />
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
