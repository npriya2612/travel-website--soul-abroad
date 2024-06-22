const mongoose=require('mongoose');
const Schema= mongoose.Schema;
const review_schema = new Schema({
    place: {
        type:String,
        required:true
    },
    rating: {
        type:Number,
        required:true
    },
    review: {
        type:String,
        required:true
    }
},{timestamps: true});
const Review = mongoose.model('reviews',review_schema);
module.exports= Review;