const express = require('express');
const router = express.Router();

const user = require('./User/User.route')


const RouterList = [
    {
        path:'/user',
        route:user
    }
]

RouterList.forEach((route)=>{
    router.use(route.path,route.route)
})

module.exports= router