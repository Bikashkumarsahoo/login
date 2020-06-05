const dbLayer = require("../model/ninjaModel")

console.log(1)
 let service={}

 service.createNinja = (ninjaObject) => {
     return dbLayer.getNinjaAll(ninjaObject.userName).then((data)=>{
         if(data)
         {
             let err=new Error("Ninja already exist.");
             err.status=406;
             throw err;
         }
         else
         {
            return dbLayer.createNinja(ninjaObject).then((data)=>{
                if(data)
                {
                    return data;
                }
                else
                {
                    let err=new Error("Account not created");
                    err.status=500;
                    throw err;
                }
            })
         }
     })
 }

service.validateLogin =(username,password) => {
    return dbLayer.getNinja(username,password).then((response) => {
        if(!response)
        {
            let err=new Error("Incorrect username or password")
            err.status =401
            throw err
        }
        else
        {
            return true;
        }
    })
}

service.fetch = (username) => {
    return dbLayer.getNinjaAll(username)
    .then((data)=>{
        if(data)
        {
            return data;
        }
    })
}

service.update =(ninjaObject) => {
    return dbLayer.updateNinja(ninjaObject).then((data)=>{
        if(data)
        {
           return data;
        }
        else
        {
            let err=new Error("Sorry could not update try again.");
            err.status=500;
            throw err;
        }
    })
}
service.updatepassword =(ninjaObject) => {
    return dbLayer.updateNinjapassword(ninjaObject).then((data)=>{
        if(data)
        {
           return data;
        }
        else
        {
            let err=new Error("Sorry could not update try again.");
            err.status=500;
            throw err;
        }
    })
}

service.delete = (username) => {
    return dbLayer.deleteNinja(username).then((data)=>
    {
        if(data)
        {
            return data;
        }
        else
        {
            let err=new Error("Sorry could not delete try again.");
            err.status=500;
            throw err;
        }
    })
}

module.exports= service