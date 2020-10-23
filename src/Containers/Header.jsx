import React from 'react';

function Header() {
  return (
    <div>
      <div className='header'>
        <img className='toggle' src='./img/ball.png' alt='menu' />
        <img src='./img/logo.png' alt='logo' />
        <a href='#add'>
          <i className='fas fa-plus' id='add-button'></i>
        </a>
      </div>
    </div>
  );
}

export default Header;
