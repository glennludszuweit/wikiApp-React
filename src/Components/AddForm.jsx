import React from 'react';
import { Link } from 'react-router-dom';

function Form() {
  return (
    <div>
      <h1>Add Player</h1>
      <form>
        <input id='name' type='text' placeholder='players name' required />

        <div className='buttons'>
          <Link to='/'>
            <button>Cancel</button>
          </Link>
          <Link to='/:id'>
            <button>Submit</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Form;
