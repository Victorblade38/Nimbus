import { useEffect, useState } from "react";
import weather from "./assets/cloudy.png";
import palette from "./assets/palette.png";
import search_icon from "./assets/search.png";
import getData from "./index.js";
import Spinner from "./components/Spinner/Spinner.jsx";

const defaultData = {
  location: {
    name: "Search your city",
    lat: 1234,
    lon: 1234,
  },
  current: {
    condition: {
      text: "Sunny",
      icon: "https://cdn.weatherapi.com/weather/64x64/day/113.png",
    },
    localtime: "2024-11-09 15:30",
    temp_c: 25,
    feelslike_c: 26,
    humidity: 12,
    pressure_in: 14,
    wind_kph: 21,
  },
};

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(defaultData);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const query = e.target.input.value.trim();

    if (!query) {
      console.log("No input provided");
      return;
    }
    console.log("Client side", query);
    try {
      setLoading(true);

      const res = await getData(query);

      if (res.hasOwnProperty("error")) {
        console.log("Error in fetching data");
      } else {
        setData(res);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setSearchInput("");
    }
  };

  const [theme, setTheme] = useState("color");

  const ChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "color" ? "clean" : "color"));
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-blue-800 overflow-hidden">
      <div className="md:w-[600px] lg:w-[800px] lg:h-[600px] bg-white text-slate-900 p-4 md:p-6 lg:p-10 grid grid-cols-6 lg:grid-rows-6 gap-1 md:gap-2 font-bold font-serif rounded-lg lg:shadow-xl lg:shadow-gray-700">
        <form
          className={`flex flex-row justify-between items-center p-2 lg:p-4 ${
            theme === "color"
              ? "bg-rose-400"
              : " bg-white border-2 lg:border-4 border-gray-700"
          } col-span-5 lg:col-span-4 rounded-lg shadow-md lg:shadow-gray-400`}
          onSubmit={onSubmitHandler}
        >
          <input
            type="text"
            name="input"
            placeholder="search city"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className={`${
              theme === "color" ? "bg-rose-400" : ""
            } placeholder:text-gray-700 text-[12px] md:text-[14px] lg:text-base  px-2 py-2 md: lg:py-2 focus:outline-none`}
          />
          <button className="p-2 active:bg-white rounded-md">
            <img src={search_icon} className="w-4" alt="Search" />
          </button>
        </form>

        <div className="grid grid-cols-3 justify-between items-center gap-1 lg:col-span-2 rounded-lg">
          <p
            className={`hidden lg:col-span-2 lg:flex lg:py-2 ${
              theme === "color"
                ? "bg-green-400 p-5"
                : "border-2 lg:border-4 border-gray-600 p-4"
            } text-lg text-center rounded-lg shadow-md shadow-gray-400`}
          >
            {data.location?.localtime || "Time Unavailable"}
          </p>
          <button
            onClick={ChangeTheme}
            className={`cursor-pointer flex justify-center col-span-3 lg:col-span-1 ${
              theme === "color"
                ? "bg-white border-2 border-gray-500  lg:border-4 lg:border-gray-700 py-3"
                : "bg-amber-400 py-3 lg:py-5"
            }  lg:py-4  text-xl text-center rounded-lg shadow-md lg:shadow-gray-400`}
          >
            <img src={palette} className="w-6 lg:w-8 " alt="Change Theme" />
          </button>
        </div>

        <div
          className={`row-span-1 col-span-4 lg:col-span-4 lg:row-span-2 flex flex-col justify-center gap-1 p-4 lg:p-8 ${
            theme === "color"
              ? "bg-lime-400"
              : "bg-white border-2 lg:border-4 border-gray-700"
          } rounded-lg shadow-md lg:shadow-gray-400`}
        >
          <h1 className="text-xl ml-2 lg:text-4xl text-left">
            {data.location?.name || "Unknown Location"}
          </h1>
          <p className="text-base ml-2 lg:text-2xl">
            {data.current?.condition?.text || "Condition Unavailable"}
          </p>
        </div>

        <div
          className={`flex justify-center items-center ${
            theme === "color"
              ? "bg-cyan-400"
              : "bg-white border-2 lg:border-4 border-gray-700"
          } row-span-1 lg:row-span-2 col-span-2 rounded-lg shadow-md lg:shadow-gray-400`}
        >
          <p className="text-4xl lg:text-7xl lg:mb-6">
            {data.current?.temp_c
              ? `${Math.floor(data.current.temp_c)}°`
              : "N/A"}
          </p>
        </div>

        <div
          className={`flex flex-col justify-center items-center p-2 ${
            theme === "color"
              ? "bg-gray-100"
              : "bg-white border-2 lg:border-4 border-gray-700"
          } col-span-3 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-3 rounded-lg shadow-md lg:shadow-gray-400`}
        >
          {loading ? (
            <Spinner />
          ) : (
            <img
              src={data.current?.condition?.icon || weather}
              className="w-[60px] md:w-[100px] lg:w-[140px] contrast-50"
              alt="Weather Icon"
            />
          )}
        </div>

        <div
          className={`col-span-6 md:col-span-4 md:row-span-2 flex flex-col gap-2 p-6 lg:p-8 ${
            theme === "color"
              ? "bg-yellow-400"
              : "bg-white border-2 lg:border-4 border-gray-700"
          } grid grid-cols-2 rounded-lg text-[12px] md:text-sm lg:text-lg shadow-md lg:shadow-gray-400`}
        >
          <p>Temperature: {data.current?.temp_c || "N/A"}°</p>
          <p>Feels Like: {data.current?.feelslike_c || "N/A"}°</p>
          <p>Humidity: {data.current?.humidity || "N/A"}</p>
          <p>Pressure: {data.current?.pressure_in || "N/A"}</p>
          <p>Wind Speed: {data.current?.wind_kph || "N/A"}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
