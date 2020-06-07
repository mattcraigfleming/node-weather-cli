const axios = require('axios')

module.exports = async () => {
  const results = await axios({
    method: 'get',
    url:
      'https://api.ipdata.co?api-key=311a7fe8479ff44dff8101b2526482009e17a170458c6df2ae9cabb4',
  })

  const { city, region } = results.data
  return `${city}, ${region}`
}
