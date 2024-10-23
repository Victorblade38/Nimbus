import { useEffect, useState } from "react";
import weather from "./assets/cloudy.png";
import brush from "./assets/paint-brush.png";
import search_icon from "./assets/search.png";
import { fetchWeatherData } from "./index";

function App() {
  const [cityName, setCityName] = useState("Mumbai");
  const [search, setSearch] = useState("");
  const [data, setData] = useState({
    name: "Mumbai",
    main: {
      temp: 302.14,
      feels_like: 309.14,
      humidity: 66,
      pressure: 1011,
      sea_level: 1011,
      grnd_level: 1010,
    },
    coord: {
      lat: 19.0144,
      lon: 72.8479,
    },
    wind: {
      speed: 3.09,
    },
    weather: [
      {
        main: "Haze",
        description: "haze",
      },
    ],
  });

  const handleSearch = async () => {
    if (!search) return; // Prevent empty searches
    const response = await fetchWeatherData(search); // Fetch data using the search term
    if (response) {
      setData(response); // Update the state with the fetched data
    } else {
      console.error("Failed to fetch data");
    }
    setCityName(search); // Update cityName to the current search input
    setSearch(""); // Clear the search input
  };

  const [theme, setTheme] = useState("clean");

  const ChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "color" ? "clean" : "color"));
  };

  const convertToCelsius = (value) => {
    return (value - 273.15).toFixed(0); // Convert Kelvin to Celsius
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-blue-800">
      <div
        style={{ width: "800px", height: "500px" }}
        className="bg-white text-slate-900 p-10 grid grid-cols-6 grid-rows-5 gap-4 font-bold font-serif rounded-lg shadow-xl shadow-gray-700"
      >
        <div
          className={`flex flex-row justify-between items-center p-4 ${
            theme === "color" ? "bg-rose-400" : "border-4 border-gray-600"
          } col-span-4 rounded-lg shadow-md shadow-gray-400`}
        >
          <input
            type="text"
            placeholder="search city"
            className={`${
              theme === "color" ? "bg-rose-400" : ""
            } placeholder:text-slate-900  px-2 py-4 focus:outline-none`}
            onChange={(e) => setSearch(e.target.value)}
            value={search} // Bind input value to state
          />
          <button className="p-2" onClick={handleSearch}>
            <img src={search_icon} width={20} alt="Search" />
          </button>
        </div>
        <div
          style={{ width: "230px" }}
          className="w-56 flex flex-row justify-between items-center col-span-1 rounded-lg"
        >
          <p
            className={`${
              theme === "color"
                ? "bg-green-400 p-5"
                : "border-4 border-gray-600 p-4"
            } text-xl text-center rounded-lg shadow-md shadow-gray-400`}
          >
            Tuesay 09:34
          </p>
          <button
            onClick={ChangeTheme}
            className={`cursor-pointer ${
              theme === "color" ? "border-4 border-gray-600" : "bg-amber-400"
            } py-2.5 text-xl text-center rounded-lg shadow-md shadow-gray-400`}
          >
            <img src={brush} width={40} height={10} alt="Change Theme" />
          </button>
        </div>
        <div
          className={`flex flex-col justify-center gap-2 p-8 ${
            theme === "color" ? "bg-lime-400" : "border-4 border-gray-600"
          } row-span-2 col-span-2 rounded-lg shadow-md shadow-gray-400`}
        >
          <h1 className="text-4xl text-left">
            {data.name || cityName || "Mumbai"} {/* Display city name */}
          </h1>
          <p className="text-xl">{data.weather[0]?.description}</p>
        </div>
        <div
          className={`flex justify-center items-center ${
            theme === "color" ? "bg-cyan-400" : "border-4 border-gray-600"
          } row-span-2 col-span-2 rounded-lg shadow-md shadow-gray-400`}
        >
          <p className="text-8xl mb-6">{convertToCelsius(data.main.temp)}°</p>
        </div>
        <div
          className={`flex flex-col gap-1 justify-center items-start px-6 ${
            theme === "color" ? "bg-fuchsia-400" : "border-4 border-gray-600"
          } col-span-2 rounded-lg shadow-md shadow-gray-400`}
        >
          <p>Longitude: {data.coord.lon}</p>
          <p>Latitude: {data.coord.lat}</p>
        </div>

        <div
          className={`flex flex-col justify-center items-start p-4 ${
            theme === "color" ? "bg-gray-100" : "border-4 border-gray-600"
          } col-span-2 row-span-3 rounded-lg shadow-md shadow-gray-400`}
        >
          <img src={weather} width={200} alt="Weather Icon" />
        </div>
        <div
          className={`grid grid-cols-2 gap-2 p-8 ${
            theme === "color" ? "bg-yellow-400" : "border-4 border-gray-600"
          } col-span-4 row-span-2 rounded-lg text-xl shadow-md shadow-gray-400`}
        >
          <p>Temperature: {convertToCelsius(data.main.temp)}°</p>
          <p>Feels Like: {convertToCelsius(data.main.feels_like)}°</p>
          <p>Humidity: {data.main.humidity}</p>
          <p>Pressure: {data.main.pressure}</p>
          <p>Wind Speed: {data.wind.speed}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
