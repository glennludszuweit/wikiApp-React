import React from 'react';
import { Link } from 'react-router-dom';

function Form() {
  return (
    <div>
      <h1>Add Player</h1>
      <form>
        <input id='name' type='text' placeholder='players name' required />

        <div className='buttons'>
          <button>Cancel</button>
          <Link>
            <button>Submit</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Form;
