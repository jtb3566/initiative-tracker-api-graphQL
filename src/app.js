import express from 'express';
import expressGraphQL from 'express-graphql';
import schema from './graphql/schema.js'

const app = express();

app.use('/graphql', expressGraphQL.graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(3000, () => {
    console.log('Listening on port 3000')
});