import {ApolloServer} from 'apollo-server-express';
import express from 'express';
import explorer from './index';

explorer.getSchema()
    .then(schema => {
        const app = express();
        const server = new ApolloServer({schema});
        server.applyMiddleware({app});

        app.listen(process.env.PORT, () => {
            console.log(`Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`);
        })
    })
    .catch(err => {
        console.log('Failed to start server', err);
    });
