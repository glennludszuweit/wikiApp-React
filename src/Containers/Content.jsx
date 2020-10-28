import React from 'react';
import Home from '../Components/Home';
import View from '../Components/View';
import Add from '../Components/Add';
import Edit from '../Components/Edit';
import { Switch, Route } from 'react-router-dom';

const Content = () => {
  return (
    <div className='content'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/add' component={Add} />
        <Route path='/edit/:slug' component={Edit} />
        <Route path='/:slug' component={View} />
      </Switch>
    </div>
  );
};

export default Content;
