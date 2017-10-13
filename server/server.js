import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import bodyParser from 'body-parser';

import { schema } from './src/schema';
import { context } from './src/resolvers';

require('dotenv').config();

const PORT = 4000;
const server = express();

// function to base64 encode a string using Buffer
const btoa = function(str) {
  return Buffer.from(str).toString('base64');
}
// Encode ClientID:ClientKey to use in request headers
const authorizationB64 = btoa(process.env.KA_CLIENT_ID + ':' + process.env.KA_CLIENT_KEY);
const authHeader = {'Authorization':'Basic '+ authorizationB64};
;
if (typeof process.env.AUTH_HEADER === 'undefined') {
  console.warn('WARNING: process.env.AUTH_HEADER is not defined. Check README.md for more information');
}

server.use('/graphql', bodyParser.json(), graphqlExpress(request => ({
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
