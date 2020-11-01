import React from 'react';
import { Link } from 'react-router-dom';
import ReactSummernote from 'react-summernote';

const Add = () => {
  return (
    <div>
      <h1>Add Player</h1>
      <form>
        <input id='name' type='text' placeholder='players name' required />

        <ReactSummernote
          value='Default Value'
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
            <button>Submit</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Add;
