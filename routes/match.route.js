const express=require("express")
const router=express.Router()
const MatchsModel=require('../model/match.model').MatchsModel
const matchcontroller=require('../controller/match.controller')
const {getAllMatches,getMatch,updateMatch}=require('../controller/match.controller')


router.get('/',(req,res)=>{
    getAllMatches(req,res)
})
router.get('/match/:key',(req,res)=>{
    getMatch(req,res)
})
router.put('/updateMatch/:id',(req,res)=>{
    updateMatch(req,res)
})
module.exports=router