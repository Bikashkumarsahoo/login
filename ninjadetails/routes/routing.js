const express = require('express');
const routing = express.Router();
const dbModule = require('../src/model/dbModule');
const db = require('../src/utilities/connection');

//All ninja details
routing.get('/getNinjalist', (req, res , next) => {
        let List=[];
        db.query('SELECT * FROM ninja',function(err,ninjas) {
            if(err)
            {
                console.log(err)
            }
            else
            {
                 if (ninjas.length > 0) 
                 {
                    complete_count = 0
                    for(let i=0; i < ninjas.length; i++)
                    {
                        let list1=[];
                        db.query('SELECT * FROM weapon where ninjaid='+ninjas[i].id+'',function(err,weapons1) {
                            if(err)
                            {
                                list1.push(null);
                            }
                            else
                            {
                                if(weapons1.length>0)
                                {
                                    for(let j=0;j<weapons1.length;j++)
                                    {
                                       list1.push(weapons1[j].weaponname);
                                    }
                                    
                                }  
                                complete_count = complete_count + 1;
                                if(complete_count === ninjas.length){
                                    res.json(List);                                    
                                }
                            }
                        });
                        ninjas[i].weapons = list1;
                        List.push(ninjas[i]);
                    }
                   console.log("fetched");
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


// Loggin ninja details
routing.get('/login/:username/:password',  (req, res, next) => {
    let username = req.params.username;
    let password = req.params.password;
    let sql="select * from ninja where (username='"+username+"' and password='"+ password+"')";
    
    db.query(sql,function(err,ninjadetails)
    {
        if(err)
        {
            console.log(err);
            throw err;
        }
        else
        {
            res.json(ninjadetails);
        }
    });
});

//Inserting ninja details
routing.post('/insertNinjalist', (req, res) => {
    console.log("request received for adding new ninja");
    var obj=[
    name = req.body.name,
    username=req.body.username,
    password=req.body.password,
    address = req.body.address,
    points = parseInt(req.body.points),
    ]
    var weapons=req.body.weapons;
    let sql = "INSERT INTO ninja (name, username, password, address, points )  values(?,?,?,?,?)" ;
    db.query(sql,obj,function(err,ninjaid) {
        if(err){
            throw err;
        }
        else{
            ninjai=ninjaid.insertId;

                let sql1 = "INSERT INTO weapon (weaponname,ninjaid)  values('"+weapons+"',"+ninjai+")"
                db.query(sql1,function(err,weaponid) {
                    if(err){
                        throw err;
                    }
                    
                });


            res.send("inserted"+ninjai);
        }                         
    });
});


//Deleting ninja details
routing.delete('/deleteNinjalist/:username', (req, res) => {
    let username =req.params.username;
    let sql1="DELETE FROM weapon WHERE ninjaid in (select id from ninja where username ='"+username+"')";
    db.query(sql1,function(err,ninjas) {
        if(err){
            console.log(err)
        }
        else{
            let sql = "DELETE FROM ninja WHERE username='"+username+"'";
            db.query(sql,function(err,ninjas){
                if(err)
                {
                    console.log(err);
                }
                
            });
            
                res.send("deleted");
            }                             
    });
});


// Updating ninja 
routing.post('/updateNinjalist', (req, res) => {
    let username = req.body.username;
    let name = req.body.name;
    let address = req.body.address;
    let points = parseInt(req.body.points);
    let sql = "UPDATE ninja SET name='"+name+"', address='"+address+"', points='"+points+"' WHERE username='"+username+"'";
    db.query(sql,function(err,rows) {
        if(err){
            throw err;}
        else{
            res.send("updated");
        }                  
    });
});


//Inserting weapon
routing.post('/insertWeaponlist/:username', (req, res) => {
    let username = req.params.username;
    let weapons = req.body.weaponname;
    let sql="select id from ninja where username ='"+username+"'";
    db.query(sql,function(err,ninjaid){
        if(err)
        {
            throw err;
        }
        else{
            ninjai=ninjaid[0].id;

            let sql1 = "INSERT INTO weapon (weaponname,ninjaid)  values('"+weapons+"',"+ninjai+")"
            db.query(sql1,function(err,weaponid) {
                if(err){
                  console.log(err);
                }
                else{
                 res.send("weapons inserted");
                }
            });
        }
    });
});

//Deleting weapon
routing.post('/deleteWeaponlist/:username', (req, res) => {
    let username = req.params.username;
    let weapons = req.body.weaponname;
    let sql1="DELETE FROM weapon WHERE ninjaid in (select id from ninja where username='"+username+"') and weaponname='"+weapons+"'";
    db.query(sql1,function(err,ninjas) {
        if(err){
            console.log(err)
        }
        else{
                res.send("deleted");
            }                             
    });
});

//Routing for fetch
routing.get('/fetch/:username', (req, res , next) => {
    let List=[];
    let username=req.params.username;
    let sql="SELECT * FROM ninja Where username='"+username+"'";
    db.query(sql, function(err,ninjas) {
        if(err)
        {
            console.log(err)
        }
       
        res.json(ninjas)
                                  
    });
});

//fetching  weapons
routing.get('/fetchWeaponlist/:username', (req, res , next) => {
    let List=[];
    let username=req.params.username;
    let sql="select weaponname FROM weapon WHERE ninjaid in (select id from ninja where username ='"+username+"')";
    db.query(sql, function(err,weapons) {
        if(err)
        {
            console.log(err)
        }
       
        res.json(weapons)
                                  
    });
});

module.exports = routing; 

