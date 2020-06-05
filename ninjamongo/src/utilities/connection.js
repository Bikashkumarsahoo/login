const mongoose = require('mongoose');
mongoose.Promise = global.Promise; 


mongoose.set('useCreateIndex',true);

const schema  = {
    "ninjaName": {       
       required: [true, 'Required field'],
       type: String
    },
    "userName":{
      required: [true, 'Required field'],
      type: String,
      unique:true
    },
    "password": {
        type: String,
        required: true
    },
    "address": String,
    "points": Number,
    "weapons": [
        {
            "weaponName": String
        }
    ],
    "jutsu": [
        {
            "jutsuName": String,
            "jutsuType": String,
        }
    ]
  }
  let ninjaSchema = mongoose.Schema(schema , { collection: 'ninjaCollection' });
//   let ninjaModel = mongoose.model("Ninja",ninjaSchema)


let connection = {}
connection.getCollection = () => {
    return mongoose.connect("mongodb://localhost:27017/ninja", { useNewUrlParser: true }).then((db) => {
        return db.model("Ninja", ninjaSchema)
    }).catch((err) => {
        console.log(err.message);

        let error = new Error("Could not connect to database")
        error.status = 500
        throw error
    })
}
  
  module.exports = connection