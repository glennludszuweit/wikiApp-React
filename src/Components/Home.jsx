import React from 'react';
import HomeImage from '../Images/home.jpg';

function Home() {
  return (
    <div className='home'>
      <img src={HomeImage} alt='Football Players' />
      <h1>Football Players Wikipedia</h1>
    </div>
  );
}

export default Home;
