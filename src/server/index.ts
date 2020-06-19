import { weather } from "./weather"

const express = require('express')

const app = express()

app.use(express.static('dist'))

app.get('/api/weather', async (req, res) => {
  const query = req.query['q']
  const result = await weather(query)
  res.send(result)
})

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`))
