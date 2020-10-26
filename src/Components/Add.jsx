import React, { useRef, useState } from 'react';
import ReactSummernote from 'react-summernote';
import { Link } from 'react-router-dom';

function Add({ addPlayer }) {
  const [description, setDescription] = useState();
  const nameUseRef = useRef(null);

  const addImage = ([file]) => {
    const reader = new FileReader();
    reader.onloadend = () => ReactSummernote.insertImage(reader.result);
    reader.readAsDataURL(file);
  };

  const onDescriptionChange = (data) => {
    setDescription(data);
  };

  const onAddPlayerHandler = () => {
    const newPlayer = {};
    newPlayer.id = Math.floor(Date.now() / 1000);
    newPlayer.name = nameUseRef.current.value;
    newPlayer.description = description;
    addPlayer(newPlayer);
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
          value={description}
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
          onChange={onDescriptionChange}
          onImageUpload={addImage}
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
}

export default Add;
