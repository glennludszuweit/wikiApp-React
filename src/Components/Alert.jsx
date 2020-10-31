import React, { useContext } from 'react';
import { PlayerContext } from '../Context/PlayerContext';
import { AlertContext } from '../Context/AlertContext';
import { Link } from 'react-router-dom';

const Alert = () => {
  const { removePlayer } = useContext(PlayerContext);

  const {
    close,
    addAlert,
    onAddAlert,
    deleteAlert,
    onDeleteAlert,
    alertMessage,
    alertButton,
    alertLink,
  } = useContext(AlertContext);

  return addAlert ? (
    <div className='alert-modal'>
      <div className='close-alert'>
        <small onClick={() => close()}>X</small>
      </div>
      <p>{alertMessage}</p>
      <hr />
      <div className='alert-btn'>
        <Link to={`/${alertLink}`}>
          <button onClick={() => onAddAlert()}>{alertButton}</button>
        </Link>
      </div>
    </div>
  ) : deleteAlert ? (
    <div className='alert-modal'>
      <div className='close-alert'>
        <small onClick={() => close()}>X</small>
      </div>
      <p>{alertMessage}</p>
      <hr />
      <div className='alert-btn'>
        <Link to='/'>
          <button
            onClick={() => {
              removePlayer(alertLink);
              onDeleteAlert();
            }}
          >
            {alertButton}
          </button>
        </Link>
      </div>
    </div>
  ) : null;
};

export default Alert;
