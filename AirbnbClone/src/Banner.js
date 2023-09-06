import React from 'react';
import './Banner.css';
import { Button } from '@mui/material';
import cabin from './images/cabin.jpeg';

function Banner() {
  return (
    <div className="banner">
      <div className='banner__image-container'>
        <img className="banner__image" src={cabin} alt="Cabin" />
        <div className='banner__info'>
          <h1>Welcome, this is our Banner. You can be creative with this!</h1>
          <Button variant='outlined'>Explore in this City</Button>
        </div>
      </div>

      <div className='banner_search'>
        <Button 
          className='banner__searchButton'
          variant='outlined'>
          Search Dates
        </Button>
      </div>
    </div>
  );
}

export default Banner;

