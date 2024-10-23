import { useEffect, useState } from "react";
import sun from "./assets/sun.png";
import brush from "./assets/paint-brush.png";

function App() {
  const [cityName, setCityName] = useState("Mumbai");
  const [theme, setTheme] = useState("color");
  const weatherData = {
    name: "Mumbai",
    main: {
      temp: 302.14,
      humidity: 74,
    },
    wind: {
      speed: 3.09,
    },
    weather: [
      {
        description: "clear sky",
      },
    ],
  };

  const convertToCelsius = () => {
    const temp = weatherData.main.temp;
    const celsius = (temp - 273.15).toFixed(2);
    return celsius;
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-blue-800 ">
      <div
        style={{ width: "800px", height: "500px" }}
        className="bg-white text-slate-800 p-10 grid grid-cols-6 grid-rows-5 gap-4 font-bold font-serif rounded-lg shadow-xl"
      >
        <div className="flex items-center bg-red-400  col-span-4 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="search city"
            className="bg-red-400 placeholder:text-white p-4 w-full focus:outline-none"
          />
        </div>
        <div
          style={{ width: "230px" }}
          className="w-56 flex flex-row justify-between items-center  col-span-1 rounded-lg "
        >
          <p className="bg-blue-400 p-5 text-xl text-center rounded-lg shadow-md">
            Tuesay 09:34
          </p>
          <button className="cursor-pointer bg-gray-100  py-3 text-xl text-center rounded-lg shadow-md">
            <img src={brush} width={40} height={10} alt="" />
          </button>
        </div>
        <div className="flex flex-col justify-center  gap-2 p-8 bg-yellow-400  row-span-2 col-span-2 rounded-lg shadow-md">
          <h1 className="text-4xl  text-left">Mumbai</h1>
          <p className="text-xl ">Clear sky</p>
        </div>
        <div className="flex justify-center items-center  bg-green-400 row-span-2 col-span-2 rounded-lg shadow-md">
          <p className="text-8xl mb-6">31°</p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-start px-8 bg-orange-400  col-span-2 rounded-lg shadow-md">
          <p>latitude : 72.8479</p>
          <p>lonigtude : 72.8479</p>
        </div>

        <div className="flex flex-col justify-center items-start p-4 bg-gray-100  col-span-2 row-span-3 rounded-lg shadow-md">
          <img src={sun} width={200} alt="" />
        </div>
        <div className="grid grid-cols-2 gap-2 p-8 bg-pink-400 col-span-4 row-span-2 rounded-lg text-xl shadow-md">
          <p>Temperature : 31°</p>
          <p>Feels like : 32°</p>
          <p>Humidity : 74</p>
          <p>Pressure : 300</p>

          <p>Wind Speed : 3.09</p>
        </div>
      </div>
    </div>
  );
}

export default App;
