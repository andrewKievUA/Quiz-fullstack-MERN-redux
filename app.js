const express =require("express")
const config =  require("config")
var cors = require('cors')



const mongoose =  require("mongoose")

const app = express()
app.use(cors())
app.use(express.json({extended: true}))
 app.use("/",require("./routes/add.question"))
 app.use("/",require("./routes/select.questions"))
// app.use("/api/link/",require("./routes/link.routes"))


const PORT = config.get("port") || 5000
console.log(PORT);


async function start (){
    try{
      await  mongoose.connect(`${config.get("MongoUri")}`)
      app.listen(PORT,()=>{  console.log(`app started ${PORT}`); })
    }catch(e){console.log("error",e.message);
    process.exit()
    }
}

start()


