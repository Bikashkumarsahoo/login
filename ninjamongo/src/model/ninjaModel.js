// const initialData = require("./data.json")
const collection = require("../utilities/connection")
console.log(2);
let model = {}

model.getNinjaAll=(username) => {
    return collection.getCollection().then((collection)=>{
        return collection.findOne({ userName:username},{_id:0, userName:1, password:1, ninjaName:1,address:1,points:1,weapons:1, weaponName:1, jutsu:1})
        .then((data)=>{
            return data;
        })       
        
    })
}

model.createNinja= (ninjaObj) => {
    return collection.getCollection().then((collection)=>{
        return collection.create(ninjaObj).then((data)=>{
            if(data)
            {
                return true;
            }
            else
            {
                return false;
            }
        })
    })
}

model.getNinja=(username,password) => {
    return collection.getCollection().then((collection)=>{
        return collection.findOne({ $and:[ {userName:username}, {password:password}]},{_id:0, userName:1, password:1})
        .then((data)=>{
            return data;
        })       
    })
}

model.updateNinja=(ninjaObj)=> {
    return collection.getCollection().then((collection)=>{
        return collection.updateOne({userName:ninjaObj.userName} , {$set:{name:ninjaObj.name, address:ninjaObj.address,points:ninjaObj.points,weapons:ninjaObj.weapons,jutsu:ninjaObj.jutsu}})
        .then((data)=>{
            return data;
        })
    })
}

model.updateNinjapassword=(ninjaObj)=> {
    return collection.getCollection().then((collection)=>{
        return collection.updateOne({userName:ninjaObj.userName} , {$set:{ password:ninjaObj.password}})
        .then((data)=>{
            return data;
        })
    })
}

model.deleteNinja = (username) => {
    return collection.getCollection().then((collection)=>{
        return collection.deleteOne({userName:username})
        .then((data) => {
            return data;
        })
    })
}

module.exports= model