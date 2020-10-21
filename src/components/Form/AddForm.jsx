import React, { useRef } from 'react';

import './Form.scss';

function Form({ playersData, setPlayersData }) {
  const nameFieldRef = useRef(null);
  const descFieldRef = useRef(null);

  const addPlayerHandler = (e) => {
    e.preventDefault();
    let playerObj = {};
    playerObj.id = Math.floor(Date.now() / 1000);
    playerObj.name = nameFieldRef.current.value;
    playerObj.description = descFieldRef.current.value;

    setPlayersData([...playersData, playerObj]);
  };

  return (
    <div>
      <h1>Add Player</h1>
      <form action=''>
        <input
          id='name'
          type='text'
          placeholder='players name'
          ref={nameFieldRef}
          required
        />
        <input
          id='description'
          type='text'
          placeholder='players description'
          ref={descFieldRef}
          required
        />
        <div className='buttons'>
          <button>Cancel</button>
          <button id='submit' onClick={addPlayerHandler}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
