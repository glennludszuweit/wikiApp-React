import React from 'react';
import AddForm from '../../components/Form/AddForm';
import PlayerInfo from '../../components/PlayerInfo/PlayerInfo';

import './MainContent.scss';

function MainContent({ addForm }) {
  return (
    <div className='content'>{addForm ? <AddForm /> : <PlayerInfo />}</div>
  );
}

export default MainContent;
