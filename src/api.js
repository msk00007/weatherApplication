export const GeoUrl = "https://wft-geo-db.p.rapidapi.com/v1/geo/";
const geoKey = import.meta.env.Geo_Key;
export const GeoOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${geoKey}`,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
export const weather_Key = import.meta.env.weather_Key;
