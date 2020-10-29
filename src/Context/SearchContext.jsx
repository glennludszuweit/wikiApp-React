import React, { useState, useEffect, createContext, useContext } from 'react';
import { PlayerContext } from './PlayerContext';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const { state } = useContext(PlayerContext);

  //search
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState(state);
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
