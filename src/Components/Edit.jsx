import React, { useRef, useState, useContext } from 'react';
import ReactSummernote from 'react-summernote';
import { Link, useParams } from 'react-router-dom';
import slugify from 'react-slugify';
import { PlayerContext } from '../Context/PlayerState';

function Edit() {
  const { state, editPlayer } = useContext(PlayerContext);
  const { slug } = useParams();
  const index = state.findIndex((player) => player.slug === slug);
  const player = state[index];
  const [description, setDescription] = useState(player.description);
  const nameUseRef = useRef(null);

  const addImage = ([file]) => {
    const reader = new FileReader();
    reader.onloadend = () => ReactSummernote.insertImage(reader.result);
    reader.readAsDataURL(file);
  };

  const onDescriptionChange = (data) => {
    setDescription(data);
  };

  const onEditPlayerHandler = () => {
    player.name = nameUseRef.current.value;
    player.slug = slugify(player.name);
    player.description = description;
    editPlayer(player);
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
            editArea.innerHTML = Object.values({ description });
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
          onChange={onDescriptionChange}
          onImageUpload={addImage}
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
}

export default Edit;
