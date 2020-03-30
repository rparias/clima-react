import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import { API_RP } from './constants/constants';
import Weather from './components/Weather';

function App() {
  const [search, updateSearch] = useState({
    city: '',
    country: ''
  });

  const [isReadyForCallApi, updateIsReadyForCallApi] = useState(false);
  const [responseAPI, updateResponseAPI] = useState({});

  const { city, country } = search;

  const callWeatherAPI = async () => {
    if (isReadyForCallApi) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_RP}`;
      const response = await fetch(url);
      const result = await response.json();
      updateResponseAPI(result);
      updateIsReadyForCallApi(false);
    }
  };

  useEffect(() => {
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
            <div className="col m6 s12">
              <Weather responseAPI={responseAPI} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
