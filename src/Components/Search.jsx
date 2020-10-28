import React, { useContext } from 'react';
import { UIContext } from '../Context/UIContext';

const Search = () => {
  const { searchValue, onSearch } = useContext(UIContext);

  return (
    <div className='search-container'>
      <input
        type='search'
        id='search'
        placeholder='search player'
        autoComplete='off'
        value={searchValue}
        onChange={onSearch}
      />
    </div>
  );
};

export default Search;
