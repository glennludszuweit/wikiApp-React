import React from 'react';
import AddForm from '../Form/AddForm';
import EditForm from '../Form/EditForm';

import './PlayerInfo.scss';

function PlayerInfo({ playersData, hash }) {
  const home = playersData[0];

  const renderView = () => {
    let id = hash.slice(1);
    const index = playersData.findIndex((player) => player.id == id);

    if (hash == '' || hash == '#0') {
      return <div dangerouslySetInnerHTML={{ __html: home.description }} />;
    } else if (hash == '#add') {
      return <AddForm />;
    } else if (index && hash == '#edit') {
      return <EditForm />;
    } else if (index) {
      return (
        <div>
          <div className='content-heading'>
            <h2 className='player-name'>{playersData[index].name}</h2>
            <div className='icons'>
              <a href='#edit'>
                <i className='fas fa-edit edit-button'></i>
              </a>
              <i className='fas fa-trash delete'></i>
            </div>
          </div>
          <div className='player-info'>
            <div
              dangerouslySetInnerHTML={{
                __html: playersData[index].description,
              }}
            />
          </div>
        </div>
      );
    }
  };

  return renderView();
}

export default PlayerInfo;
