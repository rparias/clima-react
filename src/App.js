import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import { API_RP } from './constants/constants';

function App() {
  const [search, updateSearch] = useState({
    city: '',
    country: ''
  });

  const [isReadyForCallApi, updateIsReadyForCallApi] = useState(false);

  const { city, country } = search;

  useEffect(() => {
    const callWeatherAPI = async () => {
      if (isReadyForCallApi) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_RP}`;
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
      }
    };
    callWeatherAPI();
  }, [isReadyForCallApi]);

  return (
    <div>
      <Header title="Clima React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                updateSearch={updateSearch}
                updateIsReadyForCallApi={updateIsReadyForCallApi}
              />
            </div>
            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
