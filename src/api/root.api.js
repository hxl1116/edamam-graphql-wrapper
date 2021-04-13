const {readFileSync} = require('fs');
const axios = require('axios');
require('dotenv').config()

const typeDefs = readFileSync(`${__dirname}/root.api.gql`, 'utf-8');

const resolvers = {
    Query: {
        search: (parent, args) => {
            return axios.get()
        }
    }
}

module.exports = {
    typeDefs,
    resolvers
}
