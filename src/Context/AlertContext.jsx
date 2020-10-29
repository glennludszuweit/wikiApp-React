import React, { useState, createContext } from 'react';

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [addAlert, setAddAlert] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [alertLink, setAlertLink] = useState('/');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertButton, setAlertButton] = useState('');

  const onAddAlert = () => {
    setAlertMessage('Player already exist. Update instead?');
    setAlertButton('Update Player');
    setAddAlert(!addAlert);
  };

  const onDeleteAlert = () => {
    setAlertMessage('Click proceed to delete player.');
    setAlertButton('Proceed');
    setDeleteAlert(!deleteAlert);
  };

  return (
    <AlertContext.Provider
      value={{
        addAlert,
        onAddAlert,
        deleteAlert,
        onDeleteAlert,
        alertMessage,
        alertButton,
        alertLink,
        setAlertLink,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
