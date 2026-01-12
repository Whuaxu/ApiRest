require('dotenv').config()
const express = require('express')
const cors = require('cors')
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('./src/docs/swagger.json')


const dbConnectMongo = require('./src/config/mongo')
const {dbConnectMySql} = require('./src/config/mysql')
const app = express()


app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000

/**
 * Invoke routes
 */

// TODO http://localhost:3000/api/ GET. POST. PUT. DELETE
app.use("/api", require("./src/routes"))
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

// Connect to mongodb database
dbConnectMongo();

// Connect to mysql database
dbConnectMySql();