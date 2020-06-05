const express = require('express');
const mysql = require('mysql');
const connection= mysql.createConnection(
    {
        user: 'root',
        password:'',
        connectstring: 'localhost',
        database: "ninjadetails"
    }
);

connection.connect(function(err) {
    if(err){
      throw err;
    }
    console.log('sql connected');
});
module.exports = connection;