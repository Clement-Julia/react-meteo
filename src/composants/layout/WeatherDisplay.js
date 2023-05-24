/////////////////////////////////////// RAPH //////////////////////////////////////////

import React from 'react';

const WeatherDisplay = ({ data }) => {
  return (
    <div>
      <h2>Weather Display</h2>
      {data.main && (
        <>
          <p>Température : {data.main.temp}</p>
          <p>Description : {data.weather[0].description}</p>
          <p>Coordonnées : {data.coord.lon}, {data.coord.lat}</p>
        </>
      )}
    </div>
  );
};

export default WeatherDisplay;

/////////////////////////////////////////////////////////////////////////////////////////