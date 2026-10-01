let express=require('express');
let router=express.Router();
let {user}=require('../models/users');
let {task}=require('../models/task');
//router() used to connect api with commom routes
router.get('/viewemp', async (req, res) => {
    let result=await user.find();
    res.send(result);
});
router.post('/assign-task',async(req,res)=>{
    let data=req.body;
    let newtask=new task(data);
    let result=await newtask.save();
    res.send(result);
});
router.delete('/deleteemp', (req, res) => {
    res.send("delete employee route called");
});
router.get('/viewtask',(req,res)=>{
    res.send("view task route called");
});
module.exports=router;