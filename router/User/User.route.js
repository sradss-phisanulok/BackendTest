const express = require('express')
const router = express.Router()
const UserController = require('../../controllers/User.controller')

router  
    .get('/list',UserController.userList)
    .post('/create',UserController.create)


    module.exports = router