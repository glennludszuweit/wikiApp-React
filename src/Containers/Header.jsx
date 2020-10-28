import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UIContext } from '../Context/UIContext';
import toggle from '../Images/ball.png';
import logo from '../Images/logo.png';

const Header = () => {
  const { onToggleAside } = useContext(UIContext);

  return (
    <div>
      <div className='header'>
        <img
          className='toggle'
          src={toggle}
          alt='menu'
          onClick={onToggleAside}
        />
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
        <Link to='/add'>
          <i className='fas fa-plus' id='add-button'></i>
        </Link>
      </div>
    </div>
  );
};

export default Header;
