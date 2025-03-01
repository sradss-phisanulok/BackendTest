const db = require('../models')
const user_model = db.User


const userList = async(req,res)=>{
    try{
        const results = await user_model.findAll()

        return res.status(200).send({message:'suucess',results:results})
    }catch(err){
        return res.status(200).send({message:'Sever error',error:err.message})
    }
}

const create = async(req,res)=>{
    try{
        const result = await user_model.create(req.body)
        return res.status(200).send({message:'success',result})

    }catch(err){
        return res.status(200).send({message:'Sever error',error:err.message})
    }
}

module.exports = {
    userList,
    create
}