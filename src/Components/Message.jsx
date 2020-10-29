import React, { useContext } from 'react';
import { MessageContext } from '../Context/MessageContext';

const Message = () => {
  const { close, message, addedMessage, updatededMessage } = useContext(
    MessageContext
  );

  return addedMessage ? (
    <div className='message-modal'>
      <div className='message'>{message}</div>
      <div className='close-message'>
        <small onClick={() => close()}>X</small>
      </div>
    </div>
  ) : updatededMessage ? (
    <div className='message-modal'>
      <div className='message'>{message}</div>
      <div className='close-message'>
        <small onClick={() => close()}>X</small>
      </div>
    </div>
  ) : null;
};

export default Message;
