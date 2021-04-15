"use strict";

var _apolloServerExpress = require("apollo-server-express");

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const express = require('express');
// const {ApolloServer} = require('apollo-server-express');
// const {explorer} = require('./index');
// require('dotenv').config();
_index.default.getSchema().then(schema => {
  const app = (0, _express.default)();
  const server = new _apolloServerExpress.ApolloServer({
    schema
  });
  server.applyMiddleware({
    app
  });
  app.listen(process.env.PORT, () => {
    console.log(`Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`);
  });
}).catch(err => {
  console.log('Failed to start server', err);
});