import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import fs from "fs";
import https from "https";
import http from "http";
import NexusAPI from "./datasources/nexus";

// Use .env file for config/secrets
dotenv.config();

// Warn if clientID or key are missing
if (
  typeof process.env.KA_CLIENT_ID === "undefined" ||
  process.env.KA_CLIENT_KEY === "undefined"
) {
  console.warn("WARNING: undefined ClientID or ClientKey. Check .env file");
}

async function startApolloServer() {
  const configurations = {
    // Note: You may need sudo to run on port 443
    production: { ssl: true, port: 443, hostname: "example.com" },
    development: { ssl: false, port: 4000, hostname: "localhost" },
  };

  const environment = process.env.NODE_ENV || "production";
  const config = configurations[environment];

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return { nexusAPI: new NexusAPI() };
    },
  });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  // Create the HTTPS or HTTP server, per configuration
  let httpServer;
  if (config.ssl) {
    // Assumes certificates are in a .ssl folder off of the package root.
    // Make sure these files are secured.
    httpServer = https.createServer(
      {
        key: fs.readFileSync(`./ssl/${environment}/server.key`),
        cert: fs.readFileSync(`./ssl/${environment}/server.crt`),
      },
      app
    );
  } else {
    httpServer = http.createServer(app);
  }

  await new Promise((resolve) =>
    httpServer.listen({ port: config.port }, resolve)
  );
  console.log(
    "🚀 Server ready at",
    `http${config.ssl ? "s" : ""}://${config.hostname}:${config.port}${
      server.graphqlPath
    }`
  );
  return { server, app };
}
