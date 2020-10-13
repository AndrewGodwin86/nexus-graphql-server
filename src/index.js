import { ApolloServer, gql } from 'apollo-server';
import dotenv from 'dotenv';
import NexusAPI from './datasource-nexus';
import { schema } from './schema';

// Use .env file for config/secrets
dotenv.config();

// Warn if clientID or key are missing
if (typeof process.env.KA_CLIENT_ID === 'undefined' || process.env.KA_CLIENT_KEY === 'undefined') {
  console.warn('WARNING: undefined ClientID or ClientKey. Check .env file');
}

const server = new ApolloServer({
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

