const db = require('../models/index')
const home = async (req, res) => {
  try {
    const data = await db.User.findAll();
    res.render('home.ejs',{data:data});
  } catch (e) {
    console.log(e)
  }
}
module.exports = { home };