import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';
import { makeExecutableSchema } from '@graphql-tools/schema';
import resolvers from './resolvers';

const fakeBookDatabase = [
    { name:"Book 1", pages:432 , id:1},
    { name: "Book 2", pages: 32, id: 2},
    { name: "Book 3", pages: 532, id: 3 }
]

// Grouping all type definitions in ./typedefs
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const gqlFiles = readdirSync(join(__dirname, './typedefs'));
let typeDefs = '';
gqlFiles.forEach(file => {
    typeDefs += readFileSync(join(__dirname, './typedefs', file), {
        encoding: 'utf8'
    });
});

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;