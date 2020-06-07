const axios = require('axios')
const moment = require('moment')

module.exports = async (location) => {
  const results = await axios({
    method: 'get',
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
      'X-RapidAPI-Key': 'faeac9e4e3mshd90546b1969e760p1f3532jsn44e56f78bf6c',
      useQueryString: true,
    },
    url:
      'https://community-open-weather-map.p.rapidapi.com/weather?units=metric',
    params: {
      q: `${location ? location : 'London%2Cuk'}`,
    },
  })

  return results.data
}
