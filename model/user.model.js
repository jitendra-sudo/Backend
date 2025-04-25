const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username:{type:String , unique:true , required:true, lowercase:true , trim:true , index:true } ,
    email:{type:String , required: true , unique:true},
    fullname:{ type:String , required: true , trim:true , index:true } ,
    avator:{type:String , required: true , },
    coverimage:{type:String , } ,
    watchhistory:{type:mongoose.Schema.Types.ObjectId ,
        ref:'video'
    } ,
    password: {type: String , required:true} ,
    refreshtoken:{type:String} 
  },
  { timeStamps: true }
);

export const user = mongoose.model("User", userSchema);
