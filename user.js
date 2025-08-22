const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
       lowercase:true,
    //    minLength:4,
    //    maxLength:5
   
    },
    age:{
        type:Number,   
        // min:4,
        // max:25
        validate:{
            validator:v=> v>0,
            message:props=>`${props.value} is not an age`
        }
    },
    createdAt:{
        type: Date,
        immutable:true,
        default:new Date(),
        // default:()=>Date.now()
    
    },
    updatedAt:{
        type:Date,
       default:()=>Date.now(),
    }

})


module.exports= mongoose.model('users',userSchema)