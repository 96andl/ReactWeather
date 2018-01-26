let axios = require('axios');

const OPEN_WEATHER_MAP_URL = '0628ad6e3a8b2d973dce3d6bf4f03a11';

let getTemp = function (location) {
    let encodedLocation = encodeURIComponent(location);
    let requestUrl = `http://api.openweathermap.org/data/2.5/weather?q=${encodedLocation}&appid=${OPEN_WEATHER_MAP_URL}`;

    return axios.get(requestUrl);
};

export {getTemp};