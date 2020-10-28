import React, { useContext } from 'react';
import List from '../Components/List';
import Search from '../Components/Search';
import { UIContext } from '../Context/UIContext';

const Aside = () => {
  const { toggleAside } = useContext(UIContext);

  return toggleAside ? (
    <div className='side-bar'>
      <Search />
      <List />
    </div>
  ) : null;
};

export default Aside;
