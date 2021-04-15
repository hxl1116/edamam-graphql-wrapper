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
  Recipe: {
    uri: recipe => recipe['uri'],
    label: recipe => recipe['label'],
    image: recipe => recipe['image'],
    source: recipe => recipe['source'],
    url: recipe => recipe['url'],
    yield: recipe => recipe['yield'],
    calories: recipe => recipe['calories'],
    totalWeight: recipe => recipe['total_weight'],
    ingredients: recipe => recipe['ingredients'],
    totalNutrients: recipe => recipe['total_nutrients'],
    totalDaily: recipe => recipe['total_daily'],
    dietLabels: recipe => recipe['diet_labels'],
    healthLabels: recipe => recipe['health_labels']
  }
}; // module.exports = {
//     typeDefs,
//     resolvers
// };

exports.resolvers = resolvers;