let express=require('express');
let router=express.Router();
//router() used to connect api with commom routes
router.get('/viewemp', (req, res) => {
    res.send("view employees route called");
});
router.post('/assign-task',(req,res)=>{
    res.send("assign task route called");
});
router.delete('/deleteemp', (req, res) => {
    res.send("delete employee route called");
});
router.get('/viewtask',(req,res)=>{
    res.send("view task route called");
});
module.exports=router;