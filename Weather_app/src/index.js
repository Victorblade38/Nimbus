export const fetchWeatherData = async (cityname) => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&limit=2&appid=${apiKey}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);

  try {
  } catch (error) {
    console.log("Error while fetching data", error);
  }
};
//
