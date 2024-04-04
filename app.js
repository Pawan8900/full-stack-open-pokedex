const express = require('express')
const cors = require('cors')


const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
