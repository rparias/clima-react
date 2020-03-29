import React, { useState } from 'react';

function Form() {
  const [search, updateSearch] = useState({
    city: '',
    country: ''
  });
  const [error, updateError] = useState(false);

  const { city, country } = search;

  const handleChange = e => {
    updateSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (hasErrorData()) {
      return;
    }
  };

  const hasErrorData = () => {
    const hasError = city === '' || country === '';
    updateError(hasError);
    return hasError;
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? (
        <p className="red darken-4 error">Todos los campos son obligatorios</p>
      ) : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city">Ciudad</label>
      </div>
      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          value={country}
          onChange={handleChange}
        >
          <option value="">-- Seleccione un país --</option>
          <option value="EC">Ecuador</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
        </select>
        <label htmlFor="country">País</label>
      </div>
      <div className="input-field col s12">
        <input
          type="submit"
          value="Obtener Clima"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
        />
      </div>
    </form>
  );
}
export default Form;
