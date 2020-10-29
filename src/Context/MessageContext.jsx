import React, { useState, createContext } from 'react';

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [displayMessage, setDisPlayMessage] = useState(false);
  const [message, setMessage] = useState('');

  const close = () => {
    setDisPlayMessage(false);
  };

  const onDisplayMessage = (msg) => {
    setMessage(msg);
    setDisPlayMessage(!displayMessage);
    setTimeout(() => {
      setDisPlayMessage(false);
    }, 2000);
  };

  return (
    <MessageContext.Provider
      value={{
        close,
        message,
        displayMessage,
        onDisplayMessage,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
