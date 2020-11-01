import React, { useContext } from 'react';
import { AlertContext } from '../Context/AlertContext';
import { PlayerContext } from '../Context/PlayerContext';
import { Link, useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { useDispatch, useSelector } from 'react-redux';
import { playersReducer } from '../Reducers/playersReducer';

const View = () => {
  const players = useSelector((state) => state.players);
  const dispatchPlayer = useDispatch(playersReducer);

  const { slug } = useParams();
  const index = players.findIndex((player) => player.slug === slug);
  const player = players[index];

  const onRemove = () => {
    dispatchPlayer({
      type: 'REMOVE_PLAYER',
      payload: player,
    });
  };

  return (
    <div>
      <div className='content-heading'>
        <h2 className='player-name'>{player.name}</h2>
        <div className='icons'>
          <Link to={`/edit/${player.slug}`}>
            <i className='fas fa-edit edit-button'></i>
          </Link>
          <Link to='/'>
            <i className='fas fa-trash delete' onClick={onRemove}></i>
          </Link>
        </div>
      </div>

      <div className='player-info'>{ReactHtmlParser(player.description)}</div>
    </div>
  );
};

export default View;
