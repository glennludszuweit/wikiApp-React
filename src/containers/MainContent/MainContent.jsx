import React from 'react';
import PlayerInfo from '../../components/PlayerInfo/PlayerInfo';
import AddForm from '../../components/Form/AddForm';
import EditForm from '../../components/Form/EditForm';
import ReactSummernote from 'react-summernote';
import './MainContent.scss';

function MainContent({ playersData, setPlayersData, hash }) {
  const id = hash.slice(1);
  const index = playersData.findIndex((player) => player.id === +id);
  const player = playersData[index];

  function addImage([file]) {
    const reader = new FileReader();
    reader.onloadend = () => ReactSummernote.insertImage(reader.result);
    reader.readAsDataURL(file);
  }

  return (
    <div className='content'>
      {hash === '' || hash === '#0' ? (
        <div dangerouslySetInnerHTML={{ __html: playersData[0].description }} />
      ) : hash === '#add' ? (
        <AddForm
          playersData={playersData}
          setPlayersData={setPlayersData}
          addImage={addImage}
        />
      ) : hash.match('#edit') ? (
        <EditForm
          playersData={playersData}
          setPlayersData={setPlayersData}
          hash={hash}
          addImage={addImage}
        />
      ) : index && index !== -1 ? (
        <PlayerInfo
          hash={hash}
          index={index}
          player={player}
          playersData={playersData}
          setPlayersData={setPlayersData}
        />
      ) : null}
    </div>
  );
}

export default MainContent;
