"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = exports.typeDefs = void 0;

var _fs = require("fs");

var _path = require("path");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const {readFileSync} = require('fs');
// const {parse} = require('path')
// const axios = require('axios');
const typeDefs = (0, _fs.readFileSync)(`${__dirname}/${(0, _path.parse)(__filename).name}.gql`, 'utf-8');
exports.typeDefs = typeDefs;
const resolvers = {
  Query: {
    search: (parent, args) => {
      return _axios.default.get(buildUrl(args)).then(res => {
        console.log(res.data);
        return res.data;
      });
    }
  }
}; // Converts camel case JSON key to snake case HTTP param format

exports.resolvers = resolvers;

const convertArgCase = arg => {
  return arg.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}; // Builds URL params with query args


const buildUrl = args => {
  let params = [];

  for (let arg in args) {
    if (args.hasOwnProperty(arg)) params.push(`${convertArgCase(arg)}=${args[arg]}`);
  }

  return `${process.env.BASE_URL}?${params.join('&')}`;
}; // module.exports = {
//     typeDefs,
//     resolvers
// };