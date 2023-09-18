const express = require('express')
const router = express.Router()
const {home} = require('../controllers/homeControllers.js')
const initWebRouters = (app) => {
  router.get('/',home)
  return app.use('/',router)
}
module.exports = initWebRouters;