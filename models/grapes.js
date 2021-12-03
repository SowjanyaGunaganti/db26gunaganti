const mongoose = require("mongoose") 
const grapesSchema = mongoose.Schema({ 
    type: String, 
    quantity: String, 
    cost: {type:Number,min:1,max:30}
}) 
 
module.exports = mongoose.model("grapes", 
grapesSchema) 