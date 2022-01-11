// BUILD YOUR SERVER HERE
const express = require('express')
const { find,
     findById,
     insert, 
     update, 
     remove, 
     resetDB} = require("./users/model")

const server = express()

server.get("/api/users", async (req, res) => {
    try{
        
    }catch{

    }
})



module.exports = server; // EXPORT YOUR SERVER instead of {}
