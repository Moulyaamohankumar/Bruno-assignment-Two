const mongoose = require('mongoose')
const modelSchema = mongoose.Schema({
    userName:{
        type:String,
        required: true,
    },
    mail:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})
const model = model('model', modelSchema)
module.export = model;