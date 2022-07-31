import mongoose, { Mongoose } from "mongoose";
 
const reviewSchema = Mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      rating:{
        type:Number,
        required:true
      },
      comment:{
        type:String,
        required:true
      }
      user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
      }
})

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    
  },
  description: {
    type: String,
    required: true,
  },
  reviews :[reviewSchema],
 rating: {
    type:Number,
    required: true,
    default: 0,
  },
 numReviews: {
    type:Number,
    required: true,
    default: 0,
  },
 price: {
    type:Number,
    required: true,
    default: 0,
  },
 numInStock: {
    type:Number,
    required: true,
    default: 0,
  },
  {
    timestamps:true
  }
});

const Product = mongoose.model("user",productSchema)

export default User