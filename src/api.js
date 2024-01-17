export const GeoUrl = "https://wft-geo-db.p.rapidapi.com/v1/geo/";
const geoKey = import.meta.env.VITE_REACT_APP_API_GEO_KEY;
export const GeoOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${geoKey}`,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
export const weather_Key = import.meta.env.VITE_REACT_APP_API_WEA_KEY;
export const weather_Url = "https://api.openweathermap.org/data/2.5";
