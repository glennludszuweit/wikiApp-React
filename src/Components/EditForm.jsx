import React from 'react';
import { Link } from 'react-router-dom';

function EditForm() {
  return (
    <div>
      <h1>Edit Player</h1>
      <form>
        <input
          id='name'
          type='text'
          placeholder='players name'
          defaultValue='player name'
          required
        />
        <div className='buttons'>
          <Link to='/:id'>
            <button>Cancel</button>
          </Link>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
