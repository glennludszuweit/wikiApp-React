import React from 'react';
import toggleImg from '../../images/ball.png';
import logo from '../../images/logo.png';

import './Header.scss';

function Header({ showAddForm, sideBar, showSideBar }) {
  const toggleSideBar = React.useCallback(() => {
    showSideBar(true);
  }, [showSideBar]);

  const toggleAddForm = React.useCallback(() => {
    showAddForm(true);
  }, [showAddForm]);

  return (
    <div>
      <div className='header'>
        <img
          className='toggle'
          src={toggleImg}
          alt='menu'
          onClick={toggleSideBar}
        />
        <img src={logo} alt='logo' />
        <i className='fas fa-plus' id='add-button' onClick={toggleAddForm}></i>
      </div>
    </div>
  );
}

export default Header;
