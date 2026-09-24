let express=require('express');
let router=express.Router();
let User=require('../models/users');
//router() used to connect api with commom routes
router.post('/register',async (req,res)=>{
    let data=req.body;
    let newuser=new User(data);
    let result=await newuser.save();
    res.send(result);
});
router.post('/login',(req,res)=>{
    res.send("login route called");
});
//create two more routes
//view task(get) and updateprofile(patch)
router.get('/viewtask', (req, res) => {
    res.send("view task route called");
});
router.patch('/updateprofile', (req, res) => {
    res.send("update profile route called");
});
module.exports=router;
