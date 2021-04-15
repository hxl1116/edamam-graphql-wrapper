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
  Ingredient: {
    foodId: ingr => ingr['food_id'],
    quantity: ingr => ingr['quantity'],
    measure: ingr => ingr['measure'],
    weight: ingr => ingr['weight'],
    food: ingr => ingr['food'],
    foodCategory: ingr => ingr['food_category']
  },
  NutrientInfo: {
    uri: info => info['uri'],
    label: info => info['label'],
    quantity: info => info['quantity'],
    unit: info => info['unit']
  },
  Measure: {
    uri: measure => measure['uri'],
    label: measure => measure['label']
  },
  Food: {
    foodId: food => food['food_id'],
    label: food => food['label']
  }
}; // module.exports = {
//     typeDefs,
//     resolvers
// };

exports.resolvers = resolvers;