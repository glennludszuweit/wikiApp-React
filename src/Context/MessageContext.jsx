import React, { useState, createContext } from 'react';

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [addedMessage, setAddedMessage] = useState(false);
  const [updatededMessage, setUpdatededMessage] = useState(false);
  const [message, setMessage] = useState('');

  const close = () => {
    setAddedMessage(false);
    setUpdatededMessage(false);
  };

  const displayAddMessage = () => {
    setMessage('Player added!');
    setAddedMessage(!addedMessage);
  };

  const displayUpdatedMessage = () => {
    setMessage('Player updated!');
    setUpdatededMessage(!updatededMessage);
  };

  return (
    <MessageContext.Provider
      value={{
        close,
        message,
        addedMessage,
        displayAddMessage,
        updatededMessage,
        displayUpdatedMessage,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
