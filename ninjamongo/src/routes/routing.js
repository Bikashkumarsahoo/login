const express = require('express');
const routing = express.Router();
const service = require("../service/ninjaService");
// const Transaction = require("../model/transaction")
console.log(0)

//Routing for creating
routing.post("/createNinja",(req,res,next)=>{
    let ninjaObj=req.body;
    service.createNinja(ninjaObj).then((data)=>{
        res.json({message:"Account Created Successfully"})
    }).catch((err)=>{
        next(err)
    })
})

//Routing for login
routing.get("/login/:username/:password",(req,res,next) => {
    // let ninjaObj=req.body;
    let username = req.params.username;
    let password = req.params.password;
    service.validateLogin(username,password).then((resp)=>{
        if(resp)
        {
            res.status(200);
            res.json({message:"Logged in Successfully as :" + username})
        }

    }).catch((err) => {
        next(err);
    })
})

//Routing for updating
routing.post("/update",(req,res,next) => {
    let ninjaObj=req.body;
    service.update(ninjaObj).then((resp)=>{
        if(resp)
        {
            res.status(200);
            res.json({message:" Successfully updated."})
        }
    }).catch((err) => {
        next(err);
    })
})

//Routing for updating password
routing.post("/updatepassword",(req,res,next) => {
    let ninjaObj=req.body;
    service.updatepassword(ninjaObj).then((resp)=>{
        if(resp)
        {
            res.status(200);
            res.json({message:" Successfully updated."})
        }
    }).catch((err) => {
        next(err);
    })
})

//Routing for reading
routing.get("/fetch/:username",(req,res,next) => {
    let username = req.params.username;
    service.fetch(username).then((data) => {
        res.json(data);
    })
})

//Routing for deleting
routing.delete("/delete/:username",(req,res,next) => {
    let username = req.params.username;
    service.delete(username).then((data) => {
        if(data)
        {
            res.json({message:" Deleted Successfully."})
        }
    }).catch((err) => {
        next(err);
    })
})

module.exports= routing

