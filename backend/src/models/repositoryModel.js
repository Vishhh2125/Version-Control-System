import mongoose from "mongoose";

const repositorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        default:""
    },
    content:[{
        type:String
    }],
   owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,

   },
   visibility:{

    type:Boolean,
    default:false // true for public, false for private
   },
   issues:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Issue"
        
   }]
})

export default Repository = mongoose.model("Repository", repositorySchema);
