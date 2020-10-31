import React, { useRef, useContext } from 'react';
import { PlayerContext } from '../Context/PlayerContext';
import { MessageContext } from '../Context/MessageContext';
import { EditorContext } from '../Context/EditorContext';
import { Link, useParams } from 'react-router-dom';
import ReactSummernote from 'react-summernote';
import slugify from 'react-slugify';

const Edit = () => {
  const { onDisplayMessage } = useContext(MessageContext);
  const { currentPlayer, editPlayer } = useContext(PlayerContext);
  const { addImage, editorValue, setEditorValue } = useContext(EditorContext);

  const player = currentPlayer(useParams());
  const nameUseRef = useRef(null);

  const editorChange = (data) => {
    setEditorValue(data);
  };

  const onEditPlayerHandler = () => {
    player.name = nameUseRef.current.value;
    player.slug = slugify(player.name);
    player.description = editorValue;
    editPlayer(player);
    onDisplayMessage('Player updated!');
  };

  return (
    <div>
      <h1>Edit Player</h1>
      <form>
        <input
          id='name'
          type='text'
          placeholder='players name'
          defaultValue={player.name}
          ref={nameUseRef}
        />
        <ReactSummernote
          onInit={() => {
            const editArea = document.querySelector('.note-editable');
            editArea.innerHTML = player.description;
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
          onChange={editorChange}
          onImageUpload={() => addImage()}
        />
        <div className='buttons'>
          <Link to={`/${player.slug}`}>
            <button>Cancel</button>
          </Link>
          <Link to={`/${player.slug}`} onClick={onEditPlayerHandler}>
            <button>Update</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Edit;
