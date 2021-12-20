require('dotenv').config();

const { PORT } = require("./config");

const server = require('./api/server')

// const port = process.env.PORT

server.listen(PORT, () => {
  console.log('listening on ' + PORT)
})
