const {Router} =  require("express")
const req = require("express/lib/request")
const router =  Router()
const Question = require("../models/Question")



router.post('/addQuestion',[

],async (req,res)=>{  
    async function start (){
        try{
            const {q,a1,a2,a3,a4,correct} = req.body 
            console.log(q,a1,a2,a3,a4,correct)
            if (q &&a1 && a2 && a3 && a4 && correct)
                {console.log("хватает данных")} 
            else 
                {
                    res.status(201).json({message: "Не хватает данных"})
                    console.log("")}
            
            const question = new Question({q,a1,a2,a3,a4,correct})
             await question.save(        (function (err) {
                console.log(err);
            }))

            }catch(e){ res.status(500).json({message: "Что то пошло не так"})}
    }
    start()
})


module.exports = router