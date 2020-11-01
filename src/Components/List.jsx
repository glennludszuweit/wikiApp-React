import React from 'react';
import { Link } from 'react-router-dom';

const List = () => {
  return (
    <ul>
      <Link to='/'>
        <li>hello</li>
      </Link>
    </ul>
  );
};

export default List;
