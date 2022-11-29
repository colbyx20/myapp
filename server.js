const {ApolloServer} = require('apollo-server-express');
const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");
const MONGODB_URI = "mongodb+srv://m001-student:pass123@sandbox.xkmg7i0.mongodb.net/colbydb?retryWrites=true&w=majority";
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

async function startServer(){
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    
    await server.start();

    server.applyMiddleware({app:app});

    // app.use((req,res) =>{
    //     res.send("Hello from express apollo server");
    // })

    await mongoose.connect(MONGODB_URI, {useNewUrlParser:true})
        .then(()=>{
            console.log("MongoDb connection successful");
            return server.listen({port:5000});
        })
        .then((res)=>{
            console.group(`Server running at ${res.url}`); 
        })

    app.listen(5000, () => console.log("Server running on port 5000"));
}

startServer();



