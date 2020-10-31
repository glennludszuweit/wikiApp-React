import React, { useRef, useContext } from 'react';
import { PlayerContext } from '../Context/PlayerContext';
import { AlertContext } from '../Context/AlertContext';
import { MessageContext } from '../Context/MessageContext';
import { EditorContext } from '../Context/EditorContext';
import { Link } from 'react-router-dom';
import { v4 as uid } from 'uuid';
import ReactSummernote from 'react-summernote';
import slugify from 'react-slugify';

const Add = () => {
  const { state, addPlayer } = useContext(PlayerContext);
  const { editorValue, addImage, setEditorValue } = useContext(EditorContext);
  const { onAddAlert, setAlertLink } = useContext(AlertContext);
  const { onDisplayMessage } = useContext(MessageContext);

  const nameUseRef = useRef(null);

  const editorChange = (data) => {
    setEditorValue(data);
  };

  const onAddPlayerHandler = () => {
    const newPlayer = {};
    newPlayer.id = uid();
    newPlayer.name = nameUseRef.current.value;
    newPlayer.slug = slugify(newPlayer.name);
    newPlayer.description = editorValue;

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
