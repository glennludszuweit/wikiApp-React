import React from 'react';

import './Form.scss';

function EditForm() {
  return (
    <div>
      <h1>Edit Player</h1>
      <form>
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

export default EditForm;
