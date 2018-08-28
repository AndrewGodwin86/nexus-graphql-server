import { ApolloServer, gql } from 'apollo-server';
import dotenv from 'dotenv';
import { schema } from './schema';

// This is per the dotenv docs to bring in env variables
// defined in .env
dotenv.config();

const PORT = 4000;

// function to base64 encode a string using Buffer
const btoa = function(str) {
  return Buffer.from(str).toString('base64');
}
// Encode ClientID:ClientKey to use in request headers
const authorizationB64 = btoa(process.env.KA_CLIENT_ID + ':' + process.env.KA_CLIENT_KEY);
const authHeader = {'Authorization':'Basic '+ authorizationB64};

// Warn if clientID or key are missing
if (typeof process.env.KA_CLIENT_ID === 'undefined' || process.env.KA_CLIENT_KEY === 'undefined') {
  console.warn('WARNING: undefined ClientID or ClientKey. Check .env file');
}

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  },
};


const server = new ApolloServer({
  typeDefs,
  resolvers,
  //schema
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});

/*server.use('/graphql', bodyParser.json(), graphqlExpress(request => ({
  schema,
  context: context(request.headers, authHeader)
})));

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

server.listen(PORT, () => {
  console.log(`GraphQL Server is now running on http://localhost:${PORT}/graphql`);
  console.log(`View GraphiQL at http://localhost:${PORT}/graphiql`)
});
*/

