let express=require('express');
let app=express();
let empRoutes=require('./routes/emp_routes');
let hrRoutes=require('./routes/hr_route');
let mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/hr_management').then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});
app.use(express.json());//used to collect input from user in json format
app.use('/api/emp',empRoutes);
app.use('/api/hr',hrRoutes);
//localhost:3000/api/emp/register =>post
//localhost:3000/api/emp/login =>post
//localhost:3000/api/emp/viewtask =>get
//localhost:3000/api/emp/updateprofile =>patch
//localhost:3000/api/hr/assign-task =>post
//localhost:3000/api/hr/viewemp =>get
//localhost:3000/api/hr/deleteemp =>delete
app.listen(3000,()=>{
  console.log("server listening on port 3000");
})

