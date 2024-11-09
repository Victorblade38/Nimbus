async function getData(query) {
  console.log("Api side", query);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}`;
  try {
    const response = await fetch(url);
    const res = await response.json();
    //console.log(typeof res);
    //console.log("Api side", res);
    if (res.hasOwnProperty("error")) {
      alert(`Error : ${res["error"]["message"]}`);
      return res;
    }
    return res;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

export default getData;
