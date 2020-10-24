import React from 'react';

// onInit={() => {
//   const editArea = document.querySelector('.note-editable');
//   editArea.innerHTML = Object.values({ newContent });
// }}

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
          <button>Cancel</button>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
