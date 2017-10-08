import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { schema } from './src/schema';
import { context } from './src/resolvers';

const PORT = 4000;
const server = express();

if (typeof process.env.AuthHeader === 'undefined') {
  console.warn('WARNING: process.env.AuthHeader is not defined. Check README.md for more information');
}

server.use('*', cors({ origin: 'http://localhost:3000' }));

server.use('/graphql', bodyParser.json(), graphqlExpress(request => ({
  schema,
  context: context(request.headers, process.env)
})));

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

server.listen(PORT, () => 
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`)
);