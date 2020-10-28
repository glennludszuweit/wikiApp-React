import React, { useState, useEffect, createContext, useContext } from 'react';
import { PlayerContext } from './PlayerContext';

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
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

  //toggle
  const [toggleAside, setToggleAside] = useState(false);
  const onToggleAside = () => {
    setToggleAside(!toggleAside);
  };

  //highlight
  const [selected, setSelected] = useState(-1);
  const onSelectedHighLight = (index) => () => setSelected(index);

  //alert
  const [alert, setAlert] = useState(false);
  const [alertLink, setAlertLink] = useState('');
  const onAlert = () => {
    setAlert(!alert);
  };
  const alertMessage = {
    PLAYER_EXIST: 'Player already exist! Update player instead?',
  };
  const alertButton = {
    PLAYER_EXIST: 'Update Player',
  };
  const alertButtonLink = {
    PLAYER_EXIST: `/${alertLink}`,
  };

  return (
    <UIContext.Provider
      value={{
        //search
        searchValue,
        searchResults,
        onSearch,
        //toggle
        toggleAside,
        setToggleAside,
        onToggleAside,
        //highlights
        selected,
        setSelected,
        onSelectedHighLight,
        //alert
        alert,
        onAlert,
        alertMessage,
        alertButton,
        alertButtonLink,
        setAlertLink,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
