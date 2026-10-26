import { useState } from "react"
function Register(){
    let [name,setName]=useState("")
    let [emailid,setEmailid]=useState("")
    let [password,setPassword]=useState("")
    let [role,setRole]=useState("")
    let handleRegister=async (event)=>{
        event.preventDefault()
        let res=await fetch('http://localhost:3000/api/emp/register',
        {method:"POST",headers:{'content-type':"application/json"},
        body:JSON.stringify({name,emailid,password,role})})
        let data=await res.json()
        if(res){
            console.log('data inserted success');
            console.log(data)
        }else{
            console.log("data insertion failed");
            console.log(data)
        }
    }
    return(
        <div>
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
            <input type="text" 
            onChange={(event)=>setName(event.target.value)}
            value={name}
            placeholder="enter name"></input><br/>
            <input type="email" 
            onChange={(event)=>setEmailid(event.target.value)} value={emailid} 
            placeholder="enter email"></input><br/>
            <input type="password" 
            onChange={(event)=>setPassword(event.target.value)} value={password}
            placeholder="enter password"></input><br/>
            <select onChange={(event)=>setRole(event.target.value)} value={role}>
                <option value="">choose your role</option>
                <option value="hr">HR</option>
                <option value="emp">EMPLOYEE</option>
            </select><br/>
            <button type="submit">Register</button>
        </form>
        </div>
    )
}
export default Register
