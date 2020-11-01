import React from 'react';
import Header from './Containers/Header';
import Aside from './Containers/Aside';
import Content from './Containers/Content';
import Alert from './Components/Alert';
import Message from './Components/Message';

import './App.scss';

const App = () => {
  return (
    <React.Fragment>
      <Message />
      <Alert />
      <Header />
      <div className='main'>
        <Aside />
        <Content />
      </div>
    </React.Fragment>
  );
};

export default App;
