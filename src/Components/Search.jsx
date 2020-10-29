import React, { useContext } from 'react';
import { SearchContext } from '../Context/SearchContext';

const Search = () => {
  const { searchValue, onSearch } = useContext(SearchContext);

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
