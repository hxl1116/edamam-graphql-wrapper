import {readFileSync} from 'fs';
import {parse} from 'path';

export const typeDefs = readFileSync(`${__dirname}/${parse(__filename).name}.gql`, 'utf-8');

export const resolvers = {
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
}
