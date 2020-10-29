import React, { useContext } from 'react';
import { MessageContext } from '../Context/MessageContext';

const Message = () => {
  const { close, message, displayMessage } = useContext(MessageContext);

  return displayMessage ? (
    <div className='message-modal'>
      <div className='message'>{message}</div>
      <div className='close-message'>
        <small onClick={() => close()}>X</small>
      </div>
    </div>
  ) : null;
};

export default Message;
