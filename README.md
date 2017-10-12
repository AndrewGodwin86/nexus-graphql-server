# Nexus Graphql

A GraphQL wrapper around the Nexus REST API from Knowledge Architecture.

## Table of Contents

- Overview
  - Use cases
- Nexus API
- Server
- Getting Started
- GraphiQL
- Example Queries


## Overview
This project wraps the Nexus REST API in a GraphQL endpoint.

The number of round trips to the Nexus server I would have to make to get project or employee data always used to irk me. There must be another way I thought?

Fast forward a couple of years and GraphQL is really start to get traction. Github recently published their GraphQL endpoint.

This started off in Apollo Launchpad which is great little tool to get started. The Apollo project

### Why GraphQL?

### Use cases
For KA clients who want to make use of the API but who are a large geographical distance could potential reduce response times by deploying a GraphQL server in the US-West region. In this scenario, the client makes one roundtrip from the far away place to the GraphQL server and receives one response.



## Nexus REST API
The standard documentation of the Nexus API is available here:
https://developer.knowledge-architecture.com

Any questions related to the functionality of the Nexus REST API should be directed to [support@knowledge-architecture.com](mailto:support@knowledge-architecture.com)

## Getting Started
First clone this repo and run npm install

```bash
git clone <%this-repo%> <%my-directory%>
npm install
```

Create a .env file in the `server` folder and define the AUTH_HEADER variable as follows:
```bash
AUTH_HEADER="Basic <YourValue>"
#TO-DO: Base64 encode ClientID/Key and pass to API requests
```
Where `<YourValue>` is the base64 encoding of your KA Client ID and Client Key, combined but separated by a colon i.e. 
```
Base64(clientID:clientKey)
```


Then run the start script
```bash
npm start
```

You can get your clientID and appID by contacting Knowledge Architecture.

## Server
The server is a basic Express server and uses graphql-tools to create the GraphQL schema.

## GraphiQL
[GraphiQL](https://github.com/graphql/graphiql) is a graphical interactive in-browser GraphQL IDE.
In this application you can find it at localhost:4000/graphiql

## Example queries

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
