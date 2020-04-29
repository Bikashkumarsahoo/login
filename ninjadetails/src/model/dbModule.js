const db = require('../utilities/connection');
let dbModule = {};

//     dbModule.retreiveNinjalist = () => {
//     let NinjaList = [];
//     db.query('SELECT * FROM ninja',function(err,rows) {
//         if(err){
//             console.log(err)
//         }
//         else{
//              if (rows.length > 0) 
//              {
//                 for(let i=0; i < rows.length; i++){
//                     NinjaList.push(rows[i]);
//                 }
//                 console.log(NinjaList[1].name)
//                 return NinjaList;
//              } 
//             else {
//                 let err = new Error("Failed to fetch the Ninja list!!");
//                 err.status = 500;
//                 throw err;
//             }   
//         }                           
//     });
// }
    
    // let sql = "SELECT * FROM ninja";
    // return "hi";
    // let query = db.connection.query(sql, (err, results) => {
    //   if(err) throw err;
    //     console.log(results);
    //   });
//     return db.then( (conn) => 
//         {
//             let result = conn.query("Select * from ninja");
//             return result;
//         })
//         .then( result => {
//         if (result.length > 0) 
//         {
//             for(let i=0; i < result.length; i++){
//                 NinjaList.push(result[i]);
//             }
//             return NinjaList;
//         } 
//         else {
//             let err = new Error("Failed to fetch the Ninja list!!");
//             err.status = 500;
//             throw err;
//         }
// });


module.exports = dbModule; 