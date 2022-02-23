const {Schema, model, Types} =  require("mongoose")

const schema = new  Schema({
q : {type: String, required: true},
a1: {type: String, required: true},
a2: {type: String, required: true},
a3: {type: String, required: true},
a4: {type: String, required: true},
correct : {type: Number, required: true,}
})

module.exports = model("Question", schema)