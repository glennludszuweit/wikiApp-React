import React from 'react';
import HomeView from '../Components/HomeView';
import PlayerView from '../Components/PlayerView';
import AddForm from '../Components/AddForm';
import EditForm from '../Components/EditForm';
import { Switch, Route } from 'react-router-dom';

function MainContent() {
  return (
    <div className='content'>
      <Switch>
        <Route exact path='/' component={HomeView} />
        <Route path='/add' component={AddForm} />
        <Route path={`/edit/:id`} component={EditForm} />
        <Route path={`/:id`} component={PlayerView} />
      </Switch>
    </div>
  );
}

export default MainContent;
