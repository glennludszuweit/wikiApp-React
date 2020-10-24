import React from 'react';

function Form() {
  return (
    <div>
      <h1>Add Player</h1>
      <form>
        <input id='name' type='text' placeholder='players name' required />

        <div className='buttons'>
          <button>Cancel</button>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
