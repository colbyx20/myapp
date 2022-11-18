const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://group13:group13Stack@cluster0.td6d6.mongodb.net/?retryWrites=true&w=majority";

// apollo server
// typeDefs: Graphql type Definitions
// resolvers: How do we resolve queries / mutations

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB_URI, {useNewUrlParser:true})
    .then(()=>{
        console.log("MongoDb connection successful");
        return server.listen({port:5000});
    })
    .then((res)=>{
        console.group(`Server running at ${res.url}`); 
    })