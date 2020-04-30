const express = require('express');
const routing = express.Router();
const dbModule = require('../src/model/dbModule');
const db = require('../src/utilities/connection');

routing.get('/getNinjalist', (req, res , next) => {
        // let list1=[]
        let List=[];
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
                        // List[i]=[];
                        List.push(rows[i]);
                        db.query('SELECT * FROM weapon where ninjaid='+rows[i].id+'',function(err,rows1) {
                            if(err)
                            {
                                list1.push(null);
                            }
                            else
                            {
                                if(rows1.length>0)
                                {
                                    // console.log(typeof(rows1));
                                    // list1.push(rows1);
                                    // console.log(rows1)
                                    // console.log(list1)
                                    list1=[]
                                    for(let j=0;j<rows1.length;j++)
                                    {
                                       list1.push(rows1[j].weaponname);
                                        // console.log(rows1[j].weaponid);
                                        // List.push(rows1[j]);
                                    }
                                    console.log(list1);
                                    // List[i].add("weapon",list1);
                                    // console.log(i+"--------->" +List);

                                }
                                // List[i].push(list1);
                                // list1=[];
                            }
                        });
                    }
                   console.log("fetched");
                    res.json(List);
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
            res.json(1);
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

