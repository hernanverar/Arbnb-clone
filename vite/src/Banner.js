import React from 'react'
import './Banner.css'
import { Button } from '@mui/material';

function Banner() {
  return (
    <div className='banner'>
      <div className='banner_search'>
        <Button 
        className='banner__searchButton'
        variant='outlined'>Search Dates</Button>
      </div>
      
      <div className='banner__info'>
        <h1>Welcome this is our Banner you can be creative with this!</h1>
        <Button variant='outlined'>explore in this City</Button>
      </div>
    </div> 
  )
}

export default Banner
