const bcrypt = require('bcryptjs');
const db = require('../models/index')
const salt = bcrypt.genSaltSync(10);
const createUser = async (data) => {
  return new Promise(async (res, rej) => {
    try {
      const hash = await hashPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hash,
        firstName: data.fname,
        lastName: data.lname,
        address: data.address,
        phoneNumber: data.phone,
        gender: data.gender === "1" ? true : false,
        roleId: data.roleId,
      })
      res(`Create New User: ${data.email}`)
    } catch (e) {
      rej(e)
    }
  })
}
const hashPassword = (password) => {
  return new Promise(async (res, rej) => {
    try {
      const hashPassword = await bcrypt.hashSync(password, salt);
      res(hashPassword)
    } catch (e) {
      rej(e)
    }
  })
}
const getUser = () => {
  return new Promise(async (res,rej) => {
    try {
      const data = await db.User.findAll({raw:true,});
      res(data)
    } catch(e) {
      rej(e)
    }
  })
}
const getUserById = (userId) => {
  return new Promise(async(res,rej) => {
    try {
      let userData = await db.User.findOne({
        where:{id:userId},
        raw:true,
      })
      userData ? res(userData) : res({})
    } catch (e) {
      rej(e)
    }
  })
}
const editUser = async(user) => {
  try {
    let userData = await db.User.findOne({
        where:{id:user.id},
      })
    if(userData && user) {
      userData.firstName = user.fname;
      userData.lastName = user.lname;
      userData.address = user.address;
      await userData.save()
    } else return;
  } catch (e) {
    console.log(e)
  }
}
const deleteUserById = async (id) => {
  try {
    let user = await db.User.findOne({
      where:{id:id}
    })
    if(user && id ) await user.destroy()
    else return;
  } catch (e) {
    console.log(e)
  }
}
module.exports = { createUser,getUser,getUserById,editUser,deleteUserById };