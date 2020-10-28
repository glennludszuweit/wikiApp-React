import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlayerContext } from '../Context/PlayerState';

function List() {
  const { state } = useContext(PlayerContext);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState(state);
  const [selected, setSelected] = useState(-1);

  const onListHighLight = (index) => () => setSelected(index);

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
              <li
                className={selected === index ? 'name list-highlight' : 'name'}
                onClick={onListHighLight(index)}
              >
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
