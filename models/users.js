let mongoose=require('mongoose');
let userSchema=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String,
    role:{
        type:String,
        enum:['employee','hr'],
    }
});
let User=mongoose.model('User',userSchema);
module.exports=User;