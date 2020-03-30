import React from 'react';

function Weather({ responseAPI }) {
  const { name, main } = responseAPI;

  if (!name) return null;

  const getTemperatureFromKelvinToCelcius = temp => {
    const kelvin = 273.15;
    return (temp - kelvin).toFixed(2);
  };

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>El clima de {name} es: </h2>
        <p className="temperatura">
          {getTemperatureFromKelvinToCelcius(main.temp)}
          <span>&#x2103;</span>
        </p>
        <p>
          {' '}
          Temperatura máxima: {getTemperatureFromKelvinToCelcius(main.temp_max)}
          <span>&#x2103;</span>
        </p>
        <p>
          {' '}
          Temperatura mínima: {getTemperatureFromKelvinToCelcius(main.temp_min)}
          <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
}

export default Weather;
