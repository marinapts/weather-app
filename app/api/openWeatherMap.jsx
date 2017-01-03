var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=9cfad684f0037d55afaabb029c7ee2d4&units=metric';

module.exports = {
	getTemp: function (city) {
		var encodedCity = encodeURIComponent(city);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedCity}`;

		return axios.get(requestUrl).then(function (res) {
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			}
			else {
				return res.data.main.temp;
			}
		}, function (res) {
			throw new Error(res.data.message);
		});
	}
}