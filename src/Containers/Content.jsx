import React, { useContext } from 'react';
import Home from '../Components/Home';
import Player from '../Components/Player';
import Add from '../Components/Add';
import Edit from '../Components/Edit';
import { Switch, Route } from 'react-router-dom';
import { PlayerContext } from '../Context/PlayerState';

function Content() {
  const { playersState, addPlayer, editPlayer, removePlayer } = useContext(
    PlayerContext
  );

  const url = window.location.href;
  const playerId = url.split('/').slice(-1)[0];
  const index = playersState.findIndex((player) => player.id === +playerId);
  const player = playersState[index];

  const addPlayerHandler = (props) => <Add {...props} addPlayer={addPlayer} />;
  const editPlayerHandler = (props) => (
    <Edit
      {...props}
      player={player}
      playersState={playersState}
      editPlayer={editPlayer}
    />
  );
  const showPlayerHandler = (props) =>
    (index && index !== -1) || index === 0 ? (
      <Player {...props} player={player} removePlayer={removePlayer} />
    ) : null;

  return (
    <div className='content'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/add' render={addPlayerHandler} />
        <Route path='/edit/:id' render={editPlayerHandler} />
        <Route path='/:id' render={showPlayerHandler} />
      </Switch>
    </div>
  );
}

export default Content;
