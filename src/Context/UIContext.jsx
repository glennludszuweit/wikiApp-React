import React, { useState, createContext } from 'react';

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  //toggle
  const [toggleAside, setToggleAside] = useState(false);
  const onToggleAside = () => {
    setToggleAside(!toggleAside);
  };
  //highlight
  const [selected, setSelected] = useState(-1);
  const onSelectedHighLight = (index) => () => setSelected(index);

  return (
    <UIContext.Provider
      value={{
        //toggle
        toggleAside,
        setToggleAside,
        onToggleAside,
        //highlights
        selected,
        setSelected,
        onSelectedHighLight,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
