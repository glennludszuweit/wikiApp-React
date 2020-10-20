import React from 'react';

import './Form.scss';

function Form() {
  return (
    <div>
      <h1>Add Player</h1>
      <form action=''>
        <input id='name' type='text' placeholder='players name' required />
        <div id='description'></div>
        <div className='buttons'>
          <button>Cancel</button>
          <button id='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
