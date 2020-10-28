import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UIContext } from '../Context/UIContext';

const Alert = () => {
  const {
    alert,
    onAlert,
    alertMessage,
    alertButton,
    alertButtonLink,
  } = useContext(UIContext);
  return alert ? (
    <div className='alert'>
      <p>{alertMessage.PLAYER_EXIST}</p>
      <Link to={alertButtonLink.PLAYER_EXIST}>
        <button onClick={() => onAlert()}>{alertButton.PLAYER_EXIST}</button>
      </Link>
    </div>
  ) : null;
};

export default Alert;
