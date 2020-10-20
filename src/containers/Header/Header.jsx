import React from 'react';
import toggleImg from '../../images/ball.png';
import logo from '../../images/logo.png';

import './Header.scss';

function Header({ onAddFormChange }) {
  const toggleAddForm = React.useCallback(() => {
    onAddFormChange(true);
  }, [onAddFormChange]);

  return (
    <div>
      <div className='header'>
        <img className='toggle' src={toggleImg} alt='menu' />
        <img src={logo} alt='logo' />
        <i className='fas fa-plus' id='add-button' onClick={toggleAddForm}></i>
      </div>
    </div>
  );
}

export default Header;
