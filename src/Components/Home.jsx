import React from 'react';
import HomeImage from '../Images/home.jpg';

function Home() {
  return (
    <div className='home'>
      <h1>Football Players Wikipedia</h1>
      <img src={HomeImage} alt='Football Players' />
    </div>
  );
}

export default Home;
