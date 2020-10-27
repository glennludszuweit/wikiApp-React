import React, { useContext } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link, useParams } from 'react-router-dom';
import { PlayerContext } from '../Context/PlayerState';

function View() {
  const { state, removePlayer } = useContext(PlayerContext);
  const { slug } = useParams();
  const index = state.findIndex((player) => player.slug === slug);
  const player = state[index];

  return (
    <div>
      <div className='content-heading'>
        <h2 className='player-name'>{player.name}</h2>
        <div className='icons'>
          <Link to={`/edit/${player.slug}`}>
            <i className='fas fa-edit edit-button'></i>
          </Link>
          <Link to='/' onClick={() => removePlayer(player.id)}>
            <i className='fas fa-trash delete'></i>
          </Link>
        </div>
      </div>

      <div className='player-info'>{ReactHtmlParser(player.description)}</div>
    </div>
  );
}

export default View;
