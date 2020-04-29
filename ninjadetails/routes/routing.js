const express = require('express');
const routing = express.Router();
const dbModule = require('../src/model/dbModule');
const db = require('../src/utilities/connection');

routing.get('/getNinjalist', (req, res , next) => {
        let NinjaList = [];
        
        db.query('SELECT * FROM ninja',function(err,rows) {
            if(err)
            {
                console.log(err)
            }
            else
            {
                 if (rows.length > 0) 
                 {
                    for(let i=0; i < rows.length; i++){
                        NinjaList.push(rows[i]);
                    }
                   console.log("fetched");
                    res.json(NinjaList);
                 } 
                else 
                {
                    let err = new Error("Failed to fetch the Ninja list!!");
                    err.status = 500;
                    throw err;
                }   
            }                           
        });
});

routing.get('/login/:username/:password',  (req, res, next) => {
    let username = req.params.username;
    let password = req.params.password;
    let sql="select * from ninja where (username='"+username+"' and password='"+ password+"')";
    
    db.query(sql,function(err,rows)
    {
        if(err)
        {
            console.log(err);
            throw err;
        }
        else
        {
            res.send("login successful");
        }
    });
});


routing.post('/insertNinjalist', (req, res) => {
    console.log("request received for adding new ninja");
    let id = parseInt(req.body.id);
    let name = req.body.name;
    let username=req.body.username;
    let password=req.body.password;
    let address = req.body.address;
    let points = parseInt(req.body.points);
    let data = {name:name, username:username, password:password, address:address, points:points};
    let sql = "INSERT INTO ninja SET ?";
    db.query(sql,data,function(err,rows) {
        if(err){
            throw err;
            console.log(err)
        }
        else{
            res.send("inserted");
        }                         
    });
});

routing.post('/deleteNinjalist', (req, res) => {
    console.log("request received for deleting new ninja");
    let id = parseInt(req.body.id);
    let sql = "DELETE FROM ninja WHERE id="+id+"";
    db.query(sql,function(err,rows) {
        if(err){
            console.log(err)
        }
        else{
                res.send("deleted");
            }                             
    });
});

routing.post('/updateNinjalist', (req, res) => {
    console.log("request received for updating new ninja");
    let id = parseInt(req.body.id);
    let name = req.body.name;
    let address = req.body.address;
    let points = parseInt(req.body.points);
    let sql = "UPDATE ninja SET name='"+name+"', address='"+address+"', points='"+points+"' WHERE id="+id;
    db.query(sql,function(err,rows) {
        if(err){
            console.log(err)
        }
        else{
                res.send("updated");
            }                             
    });
});
module.exports = routing; 

