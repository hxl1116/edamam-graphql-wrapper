"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = exports.typeDefs = void 0;

var _fs = require("fs");

var _path = require("path");

// const {readFileSync} = require('fs');
// const {parse} = require('path')
const typeDefs = (0, _fs.readFileSync)(`${__dirname}/${(0, _path.parse)(__filename).name}.gql`, 'utf-8');
exports.typeDefs = typeDefs;
const resolvers = {
  Hits: {
    q: hits => hits['q'],
    from: hits => hits['from'],
    to: hits => hits['to'],
    count: hits => hits['count'],
    more: hits => hits['more'],
    hits: hits => hits['hits']
  },
  Hit: {
    recipe: hit => hit['recipe'],
    bookmarked: hit => hit['bookmarked'],
    bought: hit => hit['bought']
  }
}; // module.exports = {
//     typeDefs,
//     resolvers
// };

exports.resolvers = resolvers;