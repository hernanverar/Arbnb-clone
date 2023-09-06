import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';
import Malaga from './images/Malaga.jpeg';
import Granada from './images/Granada.jpeg';

function Home() {
  return (
    <div className='home'>
      <h1>Home away  from Home!</h1>
      <br/>
      <Banner />

      <div className='home__section'>

        <Card src={Malaga} />
        <Card src={Granada}/>
        

      </div>
    </div>
  )
}

export default Home
