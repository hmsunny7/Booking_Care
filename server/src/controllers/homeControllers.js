const { createUser,getUser,getUserById,editUser,deleteUserById } = require('../services/crudServices.js')
const home = async (req, res) => {
  try {
    res.render('home.ejs');
  } catch (e) {
    console.log(e)
  }
}
const crud = (req,res) => {
  res.render('crud.ejs')
}
const create = async (req,res) => {
  let message = await createUser(req.body)
  console.log(message)
  res.redirect('/crud')
}
const read = async (req,res) => {
  let data = await getUser()
  res.render('read.ejs',{data:data})
}
const edit = async(req,res) => {
  let userId = req.query.id
  if (userId) {
    let userData = await getUserById(userId)
    res.render('edit.ejs',{userData:userData})
  } else {
    res.send("User Not Found")
  }
}
const save = async(req,res) => {
  await editUser(req.body)
  res.redirect('/read')
}
const deleteUser = async(req,res) => {
  await deleteUserById(req.query.id)
  res.redirect('/read')
}
module.exports = { home,crud,create,read,edit,save ,deleteUser};