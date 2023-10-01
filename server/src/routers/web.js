const express = require('express')
const router = express.Router()
const { home,crud,create,read,edit,save,deleteUser } = require('../controllers/homeControllers.js')
const initWebRouters = (app) => {
  router.get('/',home)
  router.post('/create',create)
  router.get('/crud',crud)
  router.get('/read',read)
  router.get('/edit',edit)
  router.post('/save',save)
  router.get('/delete',deleteUser)
  return app.use('/',router)
}
module.exports = initWebRouters;