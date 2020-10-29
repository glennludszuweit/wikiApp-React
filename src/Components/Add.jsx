import React, { useRef, useState, useContext } from 'react';
import { PlayerContext } from '../Context/PlayerContext';
import { Link } from 'react-router-dom';
import { v4 as uid } from 'uuid';
import ReactSummernote from 'react-summernote';
import slugify from 'react-slugify';
import { AlertContext } from '../Context/AlertContext';
import { MessageContext } from '../Context/MessageContext';

const Add = () => {
  const { state, addPlayer } = useContext(PlayerContext);
  const { onAddAlert, setAlertLink } = useContext(AlertContext);
  const { onDisplayMessage } = useContext(MessageContext);

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
    newPlayer.id = uid();
    newPlayer.name = nameUseRef.current.value;
    newPlayer.slug = slugify(newPlayer.name);
    newPlayer.description = description;

    if (
      state.every(
        (player) => player.name.toLowerCase() !== newPlayer.name.toLowerCase()
      )
    ) {
      addPlayer(newPlayer);
      onDisplayMessage('Player added!');
    } else {
      setAlertLink(slugify(nameUseRef.current.value));
      onAddAlert();
    }
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
};

export default Add;
