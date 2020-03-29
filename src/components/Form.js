import React, { useState } from 'react';

function Form() {
  const [search, updateSearch] = useState({
    city: '',
    country: ''
  });

  const { city, country } = search;

  const handleChange = e => {
    updateSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form>
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
    </form>
  );
}
export default Form;
