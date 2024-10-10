import { useState } from "react";
import sun from "./assets/sun.png";

function App() {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-blue-800">
      <div className="bg-white flex flex-col gap-4 bg-opacity-40 backdrop-filter backdrop-blur-lg border border-white border-opacity-30 shadow-lg rounded-lg p-6">
        <div className="w-full flex flex-row justify-between gap-2 p-2 font-semibold ">
          <input
            type="text"
            placeholder="enter city name"
            className="w-3/4 py-2 px-4 text-md rounded-md focus:outline-none"
          />
          <span className="bg-white py-2 px-4 rounded-md w-1/4 text-center text-slate-600">
            Tuesday 12:20
          </span>
        </div>
        <div className="flex flex-row justify-between col-span-3 p-4">
          <div className="flex flex-col justify-between text-white">
            <div>
              <h1 className="text-3xl font-bold">Mumbai</h1>
              <p className="font-semibold">Chances of rain 0%</p>
            </div>
            <h1 className="text-6xl font-bold mb-2">31°</h1>
          </div>
          <img src={sun} width={150} height={150} />
        </div>
        <div className="bg-white  flex flex-col gap-4 p-4 rounded-md">
          <h1 className="text-slate-400 text-sm font-bold">Today's Forecast</h1>
          <div className="flex flex-row gap-10 justify-between">
            <div className="flex flex-col gap-2 items-center p-2">
              <h1 className="text-slate-400 text-sm font-semibold">6:00 AM</h1>
              <img src={sun} width={40} height={40} />
              <h1 className="text-2xl font-bold text-slate-600">25°</h1>
            </div>
            <div className="flex flex-col gap-2 items-center  p-2">
              <h1 className="text-slate-400 text-sm font-semibold">6:00 AM</h1>
              <img src={sun} width={40} height={40} />
              <h1 className="text-2xl font-bold text-slate-600">25°</h1>
            </div>
            <div className="flex flex-col gap-2 items-center  p-2">
              <h1 className="text-slate-400 text-sm font-semibold">6:00 AM</h1>
              <img src={sun} width={40} height={40} />
              <h1 className="text-2xl font-bold text-slate-600">25°</h1>
            </div>
            <div className="flex flex-col gap-2 items-center  p-2">
              <h1 className="text-slate-400 text-sm font-semibold">6:00 AM</h1>
              <img src={sun} width={40} height={40} />
              <h1 className="text-2xl font-bold text-slate-600">25°</h1>
            </div>
            <div className="flex flex-col gap-2 items-center  p-2">
              <h1 className="text-slate-400 text-sm font-semibold">6:00 AM</h1>
              <img src={sun} width={40} height={40} />
              <h1 className="text-2xl font-bold text-slate-600">25°</h1>
            </div>
            <div className="flex flex-col gap-2 items-center  p-2">
              <h1 className="text-slate-400 text-sm font-semibold">6:00 AM</h1>
              <img src={sun} width={40} height={40} />
              <h1 className="text-2xl font-bold text-slate-600">25°</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
