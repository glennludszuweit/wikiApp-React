import React from 'react';
import PlayerInfo from '../Components/PlayerInfo';
import AddForm from '../Components/AddForm';
import EditForm from '../Components/EditForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function MainContent() {
  return (
    <div className='content'>
      <Router>
        <Switch>
          <Route path='/add' component={AddForm} />
          <Route path={`/edit/:id`} component={EditForm} />
          <Route path={`/:id`} component={PlayerInfo} />
        </Switch>
      </Router>
    </div>
  );
}

export default MainContent;
