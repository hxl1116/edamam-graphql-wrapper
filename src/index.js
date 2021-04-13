const express = require('express');
const {ApolloServer} = require('apollo-server-express');

// Import resolves and type definitions
const {typeDefs, resolvers} = require('./api/root.api.js');

// Define app and server
const port = process.env.PORT || 8080;
const app = express();
const server = new ApolloServer({typeDefs, resolvers})

server.applyMiddleware({app})

// Start the server
app.listen({port}, () => {
    console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
})
