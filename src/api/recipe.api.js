const {readFileSync} = require('fs');
const {basename} = require('path')

const typeDefs = readFileSync(`${__dirname}/${basename(__filename)}.gql`, 'utf-8');

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
}

module.exports = {
    typeDefs,
    resolvers
};
