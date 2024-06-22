const mongoose=require('mongoose');
const Schema= mongoose.Schema;
const user_schema = new Schema({
    fname: {
        type:String,
        required:true
    },
    lname: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    pwd: {
        type:String,
        required:true
    },
    cnfpwd: {
        type:String,
        required:true
    },
    no: {
        type:String,
        required:true
    }

    
},{timestamps: true});
const User = mongoose.model('users',user_schema);
module.exports= User;