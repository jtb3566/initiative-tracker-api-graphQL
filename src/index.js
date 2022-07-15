import startApolloServer from "./app";

const start = async () => {
    try {
        const app = await startApolloServer();
        await app.listen(3000);
        console.log('GraphQL server running at port:3000!')
    }
    catch {
        console.log('Not able to start GraphQL server')
    }
}

start();