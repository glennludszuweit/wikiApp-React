import React from 'react';
import Home from '../Components/Home';
import Player from '../Components/Player';
import Add from '../Components/Add';
import Edit from '../Components/Edit';
import { Switch, Route } from 'react-router-dom';

function Content() {
  return (
    <div className='content'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/add' component={Add} />
        <Route path='/edit/:slug' component={Edit} />
        <Route path='/:slug' component={Player} />
      </Switch>
    </div>
  );
}

export default Content;
