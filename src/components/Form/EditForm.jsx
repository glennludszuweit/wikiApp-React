import React, { useRef } from 'react';
import ReactSummernote from 'react-summernote';
import './Form.scss';

function addImage([file]) {
  const reader = new FileReader();
  reader.onloadend = () => ReactSummernote.insertImage(reader.result);
  reader.readAsDataURL(file);
}

function EditForm({ playersData, setPlayersData, hash, content, setContent }) {
  const nameUseRef = useRef(null);

  const id = hash.split('/')[1];
  const index = playersData.findIndex((player) => player.id === +id);
  const player = playersData[index];

  const onContentChange = (data) => {
    setContent(data);
  };

  const onSubmitEdit = (e) => {
    e.preventDefault();
    let newPlayerObj = {};
    newPlayerObj.name = nameUseRef.current.value;
    newPlayerObj.description = content;

    setPlayersData([...playersData, newPlayerObj]);
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
          value={player.description}
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
          <button id='submit' onClick={onSubmitEdit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
