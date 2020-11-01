import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uid } from 'uuid';
import ReactSummernote from 'react-summernote';
import slugify from 'react-slugify';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { playersReducer } from '../Reducers/playersReducer';

const Add = () => {
  const dispatchPlayer = useDispatch(playersReducer);
  const [editorValue, setEditorValue] = useState();
  const nameUseRef = useRef(null);

  const addImage = ([file]) => {
    const reader = new FileReader();
    reader.onloadend = () => ReactSummernote.insertImage(reader.result);
    reader.readAsDataURL(file);
  };

  const editorChange = (data) => {
    setEditorValue(data);
  };

  const onAddPlayerHandler = () => {
    const newPlayer = {};
    newPlayer.id = uid();
    newPlayer.name = nameUseRef.current.value;
    newPlayer.slug = slugify(newPlayer.name);
    newPlayer.description = editorValue;

    dispatchPlayer({
      type: 'ADD_PLAYER',
      payload: newPlayer,
    });
  };

  return (
    <div>
      <h1>Add Player</h1>
      <form>
        <input
          id='name'
          type='text'
          placeholder='players name'
          ref={nameUseRef}
          required
        />

        <ReactSummernote
          value={editorValue}
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
          onChange={editorChange}
          onImageUpload={() => addImage()}
        />

        <div className='buttons'>
          <Link to='/'>
            <button>Cancel</button>
          </Link>
          <Link to='/' onClick={onAddPlayerHandler}>
            <button>Submit</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Add;
