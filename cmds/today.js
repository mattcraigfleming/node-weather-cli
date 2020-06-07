const ora = require('ora')
const chalk = require('chalk')
const moment = require('moment')
const getWeather = require('../utils/weather')
const getLocation = require('../utils/location')

module.exports = async (args) => {
  const spinner = ora().start()

  try {
    const location = args.location || args.l || (await getLocation())
    const weather = await getWeather(location)

    spinner.stop()

    console.log(' ')
    console.log(
      chalk.cyan(`📍 Current conditions in: ${chalk.yellow(location)}`)
    )
    console.log(
      chalk.cyan(`➖ Description: ${chalk.red(weather.weather[0].description)}`)
    )
    console.log(
      `\t Temp: ${weather.main.temp}° \t Feels like: ${weather.main.feels_like}`
    )
    var format = 'hh:mm:ss'

    // var time = moment() gives you current time. no format required.
    var time = moment('09:34:00', format),
      beforeTime = moment('08:34:00', format),
      afterTime = moment('14:34:00', format)

    if (time.isBetween(beforeTime, afterTime)) {
      console.log(
        chalk.cyan(
          `🌞 The Sun will rise at ${chalk.green(
            moment.unix(weather.sys.sunrise).format('hh:mm a')
          )}`
        )
      )
    } else {
      console.log(
        `The Sun will set at ${moment
          .unix(weather.sys.sunset)
          .format('hh:mm a')}`
      )
    }
    console.log(' ')
  } catch (err) {
    spinner.stop()

    console.error(err)
  }
}
