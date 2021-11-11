const mongoose = require("mongoose") 
const grapesSchema = mongoose.Schema({ 
    type: String, 
    quantity: String, 
    cost: Number 
}) 
 
module.exports = mongoose.model("grapes", 
grapesSchema) 