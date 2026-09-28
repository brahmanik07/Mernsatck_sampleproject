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
let users=mongoose.model('users',userSchema);
module.exports={users};