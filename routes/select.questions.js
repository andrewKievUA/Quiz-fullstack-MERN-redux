const {Router} =  require("express")
const router =  Router()
const  Question = require(`../models/Question`)

router.post('/seledctQuestions',[

],async (req,res)=>{  
    async function start (){
        try{
              res.status(201).json({body: await Question.find() })
            }catch(e){ res.status(500).json({message: "Что то пошло не так"})}
    }
    start()
})


module.exports = router