import { useEffect, useState } from "react";
import {
  Sun,
  Cloud,
  Storm,
  Rainy,
  DrizzelRain,
  Snow,
  Windy,
  Clouds,
  NimbusIcon,
} from "./assets";
import getData from "./index.js";
import CityInput from "./components/CityInput.jsx";

const defaultData = {
  location: {
    country: "Country",
    name: "city",
    lat: 1234,
    lon: 1234,
  },
  current: {
    condition: {
      text: "Clear",
      icon: "https://cdn.weatherapi.com/weather/64x64/day/113.png",
    },
    localtime: "2024-11-09 15:30",
    temp_c: 11,
    feelslike_c: 12,
    humidity: 13,
    pressure_mb: 14,
    wind_kph: 15,
  },
};

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(defaultData);

  const handlecitySubmit = async (cityName) => {
    const data = await getData(cityName); // your function to fetch weather
    setData(data);
  };

  function getWeatherIconComponent(description) {
    const icons = {
      sunny: Sun,
      clear: Sun,
      clouds: Cloud,
      cloudy: Clouds,
      drizzle: DrizzelRain,
      rain: Rainy,
      thunderstorm: Storm,
      storm: Storm,
      snow: Snow,
      mist: Clouds,
      fog: Clouds,
      haze: Windy,
      windy: Windy,
      dust: Windy,
      tornado: Windy,
      thunder: Storm,
      "heavy rain": Rainy,
    };

    const lowerDesc = description.toLowerCase();

    for (let key in icons) {
      if (lowerDesc.includes(key)) {
        return icons[key];
      }
    }

    return Sun; // default
  }

  const weatherCondition = data.current.condition.text || "clear";
  const WeatherIcon = getWeatherIconComponent(weatherCondition);

  const extraInfo = [
    {
      name: "Feels Like",
      value: data.current.feelslike_c,
      unit: "°C",
    },
    {
      name: "Humidity",
      value: data.current.humidity,
      unit: "%",
    },
    {
      name: "Wind Speed",
      value: data.current.wind_kph,
      unit: "km/h",
    },

    {
      name: "Pressure",
      value: data.current.pressure_mb,
      unit: "mb",
    },
  ];

  return (
    <div className="relative bg-gray-100 dark:bg-darkBg overflow-hidden  max-w-screen min-h-screen p-6 flex justify-center">
      <div className="w-[800px] flex flex-col justify-between gap-10">
        <nav className=" flex flex-row justify-between items-center mt-4 lg:mt-10">
          <div className="flex flex-row items-center  gap-2">
            <NimbusIcon className="w-8 h-fit lg:w-10" />
            <h1 className="logoText text-textPrimary dark:darkTextSecondary">
              Nimbus
            </h1>
          </div>
          <button className="bg-gray-300 p-4 rounded-full"></button>
        </nav>
        <header className=" md:mt-10 flex flex-row justify-between items-end">
          <div className=" flex flex-col gap-1 justify-center items-start">
            <p className="text-secondary text-textSecondary dark:darkTextSecondary">
              {data.location.country}
            </p>
            <h1 className="city text-textPrimary dark:darkTextPrimary">
              {data.location.name || "Not found"}
            </h1>
          </div>
          <CityInput onSubmit={handlecitySubmit} />
        </header>
        <section className=" relative overflow-visible h-full flex flex-row justify-between items-center">
          <div className="flex flex-col gap-1">
            <p className="text-secondary text-textSecondary dark:darkTextSecondary">
              {data.current.condition.text}
            </p>
            <h1 className="numbers-primary text-textPrimary dark:darkTextPrimary">
              {data.current.temp_c}°
              <span className="numbers-secondary text-textSecondary dark:darkTextSecondary">
                C
              </span>
            </h1>
          </div>

          <div
            className="-right-[220px] md:-right-[180px]  absolute
           "
          >
            <WeatherIcon className=" w-[400px] md:w-max" />
          </div>
        </section>
        <section className=" md:mt-10 mb-10 md:mb-32 flex flex-wrap justify-between items-start">
          {extraInfo.map((info) => (
            <div className="flex flex-col items-start gap-1">
              <p className="text-secondary text-textSecondary dark:darkTextSecondary">
                {info.name}
              </p>
              <p className="numbers-secondary text-textPrimary dark:darkTextPrimary">
                {info.value}
                <span className="text-secondary text-textSecondary dark:darkTextSecondary">
                  {info.unit}
                </span>
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
