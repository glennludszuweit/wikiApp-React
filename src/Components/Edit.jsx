import React, { useRef, useState } from 'react';
import ReactSummernote from 'react-summernote';
import { Link } from 'react-router-dom';

function Edit({ player, editPlayer }) {
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
          <Link to={`/${player.id}`}>
            <button>Cancel</button>
          </Link>
          <Link to={`/${player.id}`} onClick={onEditPlayerHandler}>
            <button>Update</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Edit;
