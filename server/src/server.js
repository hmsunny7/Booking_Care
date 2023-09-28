const express = require('express')
require("dotenv").config(); 
const initWebRouters = require('./routers/web.js')
const configViewEngine = require('./config/viewEngine')
const bodyParser = require('body-parser')
const {connect} = require('./config/connect.js')
const app = express()
const port = process.env.PORT || 3001;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
configViewEngine(app) 
initWebRouters(app)
connect()

app.listen(port, () => {
  console.log(`Server Nodejs run at port : ${port}`)
})