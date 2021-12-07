import React from 'react'
import apiKey from './Apikey'

  export const Maps = ({width, height, location, zoom}) => {
      return (
          <iframe
              width={width}
              height={height}
              loading="lazy"
              allowfullscreen
              src={'https://www.google.com/maps/embed/v1/place?q=' + location + '&key=' + apiKey + '&zoom=' + zoom}
        ></iframe>
      )
  }
