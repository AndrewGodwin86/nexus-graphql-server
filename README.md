# Nexus Graphql

A GraphQL wrapper around the Nexus REST API from Knowledge Architecture.

## Table of Contents

- Overview
  - Use cases
  - Why GraphQL?
- Nexus API
- Server
- Getting Started
- GraphiQL
- Example Queries
- TO-DO


## Overview
This project wraps the Nexus REST API in a GraphQL endpoint.

I'd been wanting to try out a real world example of using GraphQL for a little while

This started off life in [Apollo Launchpad](https://launchpad.graphql.com/new)

### Why GraphQL?

### Use cases
TO-DO



## Nexus REST API
The standard documentation of the Nexus API is available here:
https://developer.knowledge-architecture.com

Any questions related to the functionality of the Nexus REST API should be directed to [support@knowledge-architecture.com](mailto:support@knowledge-architecture.com)

## Getting Started

### Clone and Install
Clone this repo and run npm install

```bash
git clone https://github.com/andrewgodwin86/nexus-graphql-server <my-directory>
cd <my-directory>/server
npm install
```
### Create Environment Variables
Create a .env file in the `server` folder and define the AUTH_HEADER variable as follows:
```bash
AUTH_HEADER="Basic <YourValue>"
#TO-DO: Base64 encode ClientID/Key and pass to API requests
```
Where `<YourValue>` is the base64 encoding of your KA Client ID and Client Key, combined but separated by a colon i.e.
```
Base64(clientID:clientKey)
```

### Start the Server
Then run the start script
```bash
npm start
```
The GraphQL endpoint will be available at `localhost:4000`

GraphiQL will be available at `localhost:4000/graphiql`


## Server
The server is a basic Express server and uses graphql-tools to create the GraphQL schema.

## GraphiQL
[GraphiQL](https://github.com/graphql/graphiql) is a graphical interactive in-browser GraphQL IDE.
In this application you can find it at `localhost:4000/graphiql`

## Example queries

Copy and paste the following query snippets into GraphiQL and hit play!

1. A list of projects with some additional details
```javascript
    {
        projectList {
          modDate
          projectDetails {
            projectName
            projectNumber
            pic
          }
        }
      }
```

## TO-DO
- Base64 encode clientID and key
- [Modularize the schema](http://dev.apollodata.com/tools/graphql-tools/generate-schema.html#modularizing)
- Expand Overview/Why GraphQL
- Add use cases
- Add more example queries
- Resolver functions are a little verbose. Some efficiencies to be made there.
- Use cache such as DataLoader to prevent duplicate queries

Move contents of server folder into root directory.
