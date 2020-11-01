import React from 'react';
import { Link } from 'react-router-dom';
import ReactSummernote from 'react-summernote';

const Edit = () => {
  return (
    <div>
      <h1>Edit Player</h1>
      <form>
        <input id='name' type='text' placeholder='players name' />
        <ReactSummernote
          onInit={() => {
            const editArea = document.querySelector('.note-editable');
            editArea.innerHTML = 'hello';
          }}
          options={{
            height: 350,
            dialogsInBody: true,
            toolbar: [
              ['style', ['style']],
              ['font', ['bold', 'underline', 'clear', 'color']],
              ['fontname', ['fontname']],
              ['para', ['ul', 'ol', 'paragraph']],
              ['table', ['table']],
              ['insert', ['link', 'picture', 'video']],
              ['view', ['fullscreen', 'codeview']],
            ],
          }}
        />
        <div className='buttons'>
          <Link to='/'>
            <button>Cancel</button>
          </Link>
          <Link to='/'>
            <button>Update</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Edit;
