import mongoose from 'mongoose';

const issueSchema= new mongoose.Schema({

    title:{
        type:String,
        required:true,
        trim:true,

    },
    description:{
        type:String,
        required:true,
        trim:true,
    },
    status:{
        type:String,
        enum:["open","closed"],
        default:"open",
    },
    repository:{
        type :mongoose.Schema.Types.ObjectId,
        ref:"Repository",
        required: true,
    },
    issuedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
    }






},{
    timestamps: true
})


export default Issue = mongoose.model("Issue", issueSchema);