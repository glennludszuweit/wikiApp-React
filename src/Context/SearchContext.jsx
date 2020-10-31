import React, { useState, useEffect, createContext, useContext } from 'react';
import { PlayerContext } from './PlayerContext';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const { players } = useContext(PlayerContext);

  //search
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState(players);
  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };
  useEffect(() => {
    const results = players.filter((player) =>
      player.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(results);
  }, [players, searchValue]);

  return (
    <SearchContext.Provider
      value={{
        //search
        searchValue,
        searchResults,
        onSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
