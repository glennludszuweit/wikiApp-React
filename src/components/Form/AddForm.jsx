import React, { useRef } from 'react';
import ReactSummernote from 'react-summernote';
import './Form.scss';

function addImage([file]) {
  const reader = new FileReader();
  reader.onloadend = () => ReactSummernote.insertImage(reader.result);
  reader.readAsDataURL(file);
}

function Form({ content, setContent, playersData, setPlayersData }) {
  const nameFieldRef = useRef(null);

  const onContentChange = (data) => {
    setContent(data);
  };

  const addPlayerHandler = (e) => {
    e.preventDefault();
    let playerObj = {};
    playerObj.id = Math.floor(Date.now() / 1000);
    playerObj.name = nameFieldRef.current.value;
    playerObj.description = content;

    setPlayersData([...playersData, playerObj]);
  };

  return (
    <div>
      <h1>Add Player</h1>
      <form action=''>
        <input
          id='name'
          type='text'
          placeholder='players name'
          ref={nameFieldRef}
          required
        />
        <ReactSummernote
          value={content}
          options={{
            height: 350,
            dialogsInBody: true,
            toolbar: [
              ['style', ['style']],
              ['font', ['bold', 'underline', 'clear']],
              ['fontname', ['fontname']],
              ['para', ['ul', 'ol', 'paragraph']],
              ['table', ['table']],
              ['insert', ['link', 'picture', 'video']],
              ['view', ['fullscreen', 'codeview']],
            ],
          }}
          onChange={onContentChange}
          onImageUpload={addImage}
        />
        <div className='buttons'>
          <button>Cancel</button>
          <button id='submit' onClick={addPlayerHandler}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
