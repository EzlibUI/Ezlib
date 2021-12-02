import React from 'react'

  export function Maps({width, height, location, zoom}) {
      return (
          <iframe
              width={width}
              height={height}
              loading="lazy"
              allowfullscreen
              src={'https://www.google.com/maps/embed/v1/place?q=' + location + '&key=AIzaSyD6JR9xjw9xjtPRBMokIBM1eJ5LNUHRXIQ&zoom=' + zoom}
        ></iframe>
      )
  }
