import express from 'express';
import graphqlServer from './graphql';

async function startApolloServer() {
    const app = express();
    await graphqlServer.start()
    graphqlServer.applyMiddleware({
        app,
    });
    return app;
}

export default startApolloServer;