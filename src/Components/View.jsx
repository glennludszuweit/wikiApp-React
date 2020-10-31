import React, { useContext } from 'react';
import { AlertContext } from '../Context/AlertContext';
import { PlayerContext } from '../Context/PlayerContext';
import { Link, useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

const View = () => {
  const { onDeleteAlert, setAlertLink } = useContext(AlertContext);
  const { currentPlayer } = useContext(PlayerContext);

  const player = currentPlayer(useParams());

  const onRemove = () => {
    setAlertLink(player.id);
    onDeleteAlert();
  };

  return (
    <div>
      <div className='content-heading'>
        <h2 className='player-name'>{player.name}</h2>
        <div className='icons'>
          <Link to={`/edit/${player.slug}`}>
            <i className='fas fa-edit edit-button'></i>
          </Link>
          <i className='fas fa-trash delete' onClick={onRemove}></i>
        </div>
      </div>

      <div className='player-info'>{ReactHtmlParser(player.description)}</div>
    </div>
  );
};

export default View;
