const { Users } = require('../models');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { nanoid } = require('nanoid')
const BaseController = require('./baseController');

class UsersController extends BaseController {
  constructor() {
    super(Users);
  }
  
  // async register(first_name, last_name, email, password, confirm, phone) {
  //   const encryptedPassword = await bcrypt.hashSync(password, 5)
  //   const id = nanoid()
  //   const payload = {
  //     id,
  //     first_name,
  //     last_name,
  //     email,
  //     confirm,
  //     phone
  //   }
  //   await Users.create({
  //     ...payload,
  //     password: encryptedPassword
  //   })
  //   return payload
  // }
  async register(first_name, last_name, email, password) {
    const encryptedPassword = await bcrypt.hash(password, 5)
    const id = nanoid()
    const payload = {
      id,
      first_name, 
      last_name,
      email,
    }
    await Users.create({
      ...payload,
      password: encryptedPassword
    })
    payload.token = jwt.sign({ id }, process.env.JWT_SECRET)
    return payload
  }

}

module.exports = UsersController;
