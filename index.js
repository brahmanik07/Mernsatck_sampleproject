let express=require('express');
let app=express();
let empRoutes=require('./routes/emp_routes');
let hrRoutes=require('./routes/hr_route');
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

