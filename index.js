import express from "express";
import path from "path";

const app=express();
const port=3000;

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.get("/auth",(req,res)=>{
    res.render("auth.ejs");
})

app.get("/saved",(req,res)=>{
    res.sendFile(path.resolve("views/index.html"));
})

app.post("/create",(req,res)=>{
    res.render("create.ejs");
})
app.listen(port,()=>{
    console.log("Running on port "+port);
})