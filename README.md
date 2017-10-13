# Nexus Graphql

A GraphQL wrapper around the Nexus REST API from Knowledge Architecture.

## Table of Contents

- Overview
  - Use cases
  - Why GraphQL?
- Nexus API
- Server
- Getting Started
- Example Queries
- TO-DO


## Overview
This project wraps the Nexus REST API in a GraphQL endpoint.

I'd been wanting to try out a real world example of using GraphQL for a little while an
and the Nexus API seemed like an obvious choice.

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
Create a .env file in the `server` folder and define the KA_CLIENT_ID and KA_CLIENT_KEY variables as follows:
```bash
KA_CLIENT_ID="YourClientID"
KA_CLIENT_KEY="YourClientKey"
```
You can request your clientID and clientKey from Knowledge-Architecture.

### Start the Server
Then run the start script
```bash
npm start
```
The GraphQL endpoint will be available at `localhost:4000/graphql`

GraphiQL will be available at `localhost:4000/graphiql`


## Server
The server is a basic Express server and uses graphql-tools to create the GraphQL schema.

## Example queries

Copy and paste the following query snippets into GraphiQL and hit play!

A list of projects with some additional details
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


A list of Stream Items and their data
```javascript
{
  streamItemList {
    streamItemDetails {

    }
  }
}
```

## TO-DO
- [Modularize the schema](http://dev.apollodata.com/tools/graphql-tools/generate-schema.html#modularizing)
- Expand Overview/Why GraphQL
- Add use cases
- Add more example queries
- Resolver functions are a little verbose. Some efficiencies to be made there.
- Use cache such as DataLoader to prevent duplicate queries

Move contents of server folder into root directory.
