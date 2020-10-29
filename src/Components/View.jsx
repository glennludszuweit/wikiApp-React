import React, { useContext } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link, useParams } from 'react-router-dom';
import { AlertContext } from '../Context/AlertContext';
import { PlayerContext } from '../Context/PlayerContext';

const View = () => {
  const { onDeleteAlert, setAlertLink } = useContext(AlertContext);
  const { state } = useContext(PlayerContext);
  const { slug } = useParams();
  const index = state.findIndex((player) => player.slug === slug);
  const player = state[index];

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
