const trends = require('google-trends-api')

const main = async () => {
  const resp = JSON.parse(await trends.interestOverTime({ keyword: 'ipfs' }))
  const data = resp.default.timelineData.map(value => {
    return { date: parseInt(value.time) * 1000, value: value.value[0] }
  })
  return data
}

module.exports = main
main()
