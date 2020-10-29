import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../Context/SearchContext';
import { UIContext } from '../Context/UIContext';

const List = () => {
  const { searchResults } = useContext(SearchContext);
  const { selected, onSelectedHighLight } = useContext(UIContext);

  return (
    <ul className='names'>
      {searchResults.map((player, index) => {
        return (
          <Link to={`/${player.slug}`} key={index}>
            <li
              className={selected === index ? 'name list-highlight' : 'name'}
              onClick={onSelectedHighLight(index)}
            >
              {player.name}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default List;
