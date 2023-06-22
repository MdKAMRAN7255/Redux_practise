import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export default function Checkbox1() {
  const countries = [
    { name: "India", value: 'IN', Cities: ["Delhi", "Mumbai"] },
    { name: "Pakistan", value: 'PAK', Cities: ["Lahore", "Karachi"] },
    { name: "Bangladesh", value: 'BAN', Cities: ["Dhaka", "Chittagong"] },
    { name: "Nepal", value: 'NEP', Cities: ["Kathmandu", "Silchar"] },
  ];
  const [country, setCountry] = useState(0);

  return ReactDOM.createPortal(
    <>
      <select
        value={country}
        onChange={(e) => { setCountry(e.target.value) }}
      >
        {countries.map((item, index) => (
          <option key={index} value={index}>
            {item.name}
          </option>
        ))}
      </select>
      {countries[country] && (
        <select value={country}>
          {countries[country].Cities.map((item, index) => (
            <option key={index} value={index}>
              {item}
            </option>
          ))}
        </select>
      )}
    </>,
    document.getElementById('cascadingDropdown') // Specify the ID or reference to the portal container
  );
}
