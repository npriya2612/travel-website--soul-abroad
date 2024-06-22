const mongoose=require('mongoose');
const Schema= mongoose.Schema;
const item_schema = new Schema({
    name: {
        type:String,
        required:true
    },
    username: {
        type:String,
        required:true
    }
},{timestamps: true});
const Item = mongoose.model('items',item_schema);
module.exports= Item;