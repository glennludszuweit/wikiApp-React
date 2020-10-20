import React from 'react';
import AddForm from '../../components/Form/AddForm';

import './MainContent.scss';

function MainContent({ addForm }) {
  return <div>{addForm ? <AddForm /> : 'Hello!'}</div>;
}

export default MainContent;
