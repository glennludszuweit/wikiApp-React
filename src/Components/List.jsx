import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlayerContext } from '../Context/PlayerState';

function List() {
  const { state } = useContext(PlayerContext);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState(state);
  let selected;

  const onListHighLight = (e) => {
    if (e.target.className === 'name' || e.target !== 0) {
      if (selected) {
        selected.classList.remove('list-highlight');
      }
      selected = e.target;
      selected.classList.add('list-highlight');
    }
  };

  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const results = state.filter((player) =>
      player.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(results);
  }, [state, searchValue]);

  return (
    <div>
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
      <ul className='names'>
        {searchResults.map((player, index) => {
          return (
            <Link to={`/${player.slug}`} key={index}>
              <li className='name' onClick={onListHighLight}>
                {player.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
