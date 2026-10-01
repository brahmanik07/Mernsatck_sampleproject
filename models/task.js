let mongoose=require('mongoose');
let taskSchema=mongoose.Schema({
    task_name:{
        type:String,
        required:true
    },
    task_desc:{
        type:String,
        required:true,
    },
    task_duedate:{
        type:Date,
        required:true,
    },
    task_assignedBy:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"users",
    },
     task_assignedTo:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"users",
    },
    task_status:{
        type:String,
        enum:["pending","inprogress","completed"],
        default:"pending",
    }
},
    {
        timestamps:true,
    },)
const task=mongoose.model('tasks',taskSchema);
module.exports={task}