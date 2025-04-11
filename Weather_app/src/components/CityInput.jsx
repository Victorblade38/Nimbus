import React, { useState } from "react";

function CityInput({ onSubmit }) {
  const [city, setCity] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && city.trim() !== "") {
      onSubmit(city.trim());
      setCity("");
    }
  };

  return (
    <input
      type="text"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Type a city and press Enter"
      className="p-2 w-40 text-[16px] md:w-60 rounded-md border-[1px] border-gray-200"
    />
  );
}

export default CityInput;
