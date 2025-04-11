import React from "react";
import AsyncSelect from "react-select/async";

const CitySelector = ({ onCitySelect }) => {
  const fetchCities = async (inputValue) => {
    if (!inputValue) return [];

    const response = await fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${inputValue}&limit=10`,
      {
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_CITIES_API_KEY,
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();
    return data.data.map((city) => ({
      label: `${city.city}, ${city.countryCode}`,
      value: city.city,
    }));
  };

  const loadOptions = (inputValue, callback) => {
    fetchCities(inputValue).then(callback);
  };

  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        onChange={(selectedOption) => onCitySelect(selectedOption.value)}
        placeholder="Search for a city..."
      />
    </div>
  );
};

export default CitySelector;
