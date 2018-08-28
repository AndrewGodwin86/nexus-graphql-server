import { ApolloServer, gql } from 'apollo-server';
import dotenv from 'dotenv';
import NexusAPI from './datasource-nexus';
import { schema } from './schema';

// This is per the dotenv docs to bring in env variables
// defined in .env
dotenv.config();

// Warn if clientID or key are missing
if (typeof process.env.KA_CLIENT_ID === 'undefined' || process.env.KA_CLIENT_KEY === 'undefined') {
  console.warn('WARNING: undefined ClientID or ClientKey. Check .env file');
}

const server = new ApolloServer({
  //typeDefs,
  //resolvers,
  schema,
  dataSources: () => {
    return {
      nexusAPI: new NexusAPI()
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});

