const mongoose = require("mongoose")

const videoSchema = mongoose.Schema({
        videofile:{ type: String , required:true }, 
        thumbnail: { type:String , required:true },
        title:{ type : String , required:true } ,
        description:{type:String, required:true },
        duration:{ type:Number , default:0 } ,
        isPublished:{type:Boolean , default:true} ,
        owner:{ type: mongoose.Schema.Types.ObjectId ,
            ref: 'User'
        }

})

export const video = mongoose.model("Video" , videoSchema)