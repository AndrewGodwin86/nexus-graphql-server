# Nexus Graphql

A wrapper around the Nexus REST API using GraphQL.

### Contents

- Overview
- Nexus API
- Getting Started
- Example Queries
- TO-DO


## Overview
I've been wanting to try out GraphQL for some time and the Nexus API seemed like an obvious choice.

This project uses:
- [apollo server (graphql-server-express)](https://github.com/apollographql/apollo-server)
- [graphql-tools](https://github.com/apollographql/graphql-tools) to generate the schema
- [GraphiQL](https://github.com/graphql/graphiql) for exploring the GraphQL

This server started off its life in [Apollo Launchpad](https://launchpad.graphql.com/new)


## Nexus REST API
The documentation of the Nexus API is available here:
https://developer.knowledge-architecture.com

Any questions related to the functionality of the Nexus REST API should be directed to [support@knowledge-architecture.com](mailto:support@knowledge-architecture.com)

## Getting Started

### Clone and Install
Clone this repo and run npm install

```
git clone https://github.com/andrewgodwin86/nexus-graphql-server <my-directory>
cd <my-directory>/server
npm install
```
### Create Environment Variables
Create a file named `.env` in the `server` folder and define the KA_CLIENT_ID and KA_CLIENT_KEY variables as follows:
```
KA_CLIENT_ID="YourClientID"
KA_CLIENT_KEY="YourClientKey"
```
You can request your client ID and client key from Knowledge-Architecture.

### Start the Server
Run the start script
```
npm start
```
The GraphQL endpoint will be available at `http://localhost:4000/graphql`

GraphiQL will be available at `http://localhost:4000/graphiql`

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
- Add more example queries
- Resolver functions are a little verbose. Some efficiencies to be made there.
- Use cache such as DataLoader to prevent duplicate queries
- Expand ability to pass URL params to entity list requests

Move contents of server folder into root directory.
