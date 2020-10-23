import React, { useRef, useState } from 'react';
import ReactSummernote from 'react-summernote';

function EditForm({ playersData, setPlayersData, hash, addImage }) {
  const id = hash.split('/')[1];
  const index = playersData.findIndex((player) => player.id === +id);
  const player = playersData[index];

  const [newContent, setNewContent] = useState(player.description);
  const nameUseRef = useRef(null);

  const onContentChange = (data) => {
    setNewContent(data);
  };

  const onSubmitEdit = (e) => {
    e.preventDefault();

    player.id = player.id;
    player.name = nameUseRef.current.value;
    player.description = newContent;

    setPlayersData([...playersData]);
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
          required
        />
        <ReactSummernote
          onInit={() => {
            const editArea = document.querySelector('.note-editable');
            editArea.innerHTML = Object.values({ newContent });
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
          onChange={onContentChange}
          onImageUpload={addImage}
        />
        <div className='buttons'>
          <button>Cancel</button>
          <button id='submit' onClick={onSubmitEdit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
