const express = require('express')
const app = express()
app.use(express.json())

app.get('/api', (request, response) => {
  response.json({ apiName: 'cryto-api' })
})

const PORT = process.env.PORT | 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
