from fastapi import FastAPI
app=FastAPI()
@app.get("/getstudents")
def getstudents():
    return "get student method called"
#localhost:8000/addstudent=>post
@app.post("/addstudents")
def addstudents():
    return "add student method called"
@app.put("/updatestudents")
def updatestudents():
    return "update student method called"
@app.delete("/deletestudents")
def deletestudents():
    return "delete student method called"