import React from 'react';

import './Form.scss';

function EditForm({ playersData, hash }) {
  const id = hash.split('/')[1];
  const index = playersData.findIndex((player) => player.id === +id);
  const player = playersData[index];

  return (
    <div>
      <h1>Edit Player</h1>
      <form>
        <input
          id='name'
          type='text'
          placeholder='players name'
          defaultValue={player.name}
          required
        />
        <input type='text' defaultValue={player.description} />
        <div className='buttons'>
          <button>Cancel</button>
          <button id='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
