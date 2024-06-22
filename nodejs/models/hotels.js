const mongoose=require('mongoose');
const Schema= mongoose.Schema;
const hotel_schema = new Schema({
    location: {
        type:String,
        required:true
    },
    roomtype: {
        type:String,
        required:true
    },
    roomid: {
        type:String,
        required:true,
        unique:true
    },
    status: {
        type:String,
        required:true
    },
    baseprice:{
        type:Number
    }
},{timestamps: true});
const Hotel = mongoose.model('hotels',hotel_schema);
module.exports= Hotel;