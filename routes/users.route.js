const express=require("express")
const router=express.Router()
const usersModel=require("../model/user.model").usersModel
const userController=require('../controller/user.controller')

router.post('/Register',(req,res)=>{
    userController.register(req,res)
})
router.post('/Login',(req,res)=>{
    userController.login(req,res)
})
module.exports=router;