const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const {typeDefs, resolvers} = require('./api/root.api.js');
require('dotenv').config();

const app = express();
const server = new ApolloServer({typeDefs, resolvers})
server.applyMiddleware({app})

app.listen(process.env.PORT, () => {
    console.log(`Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`);
})
