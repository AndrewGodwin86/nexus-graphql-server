# Nexus GraphQL Server

A wrapper around the Nexus REST API using GraphQL.

### Contents

- Overview
- Nexus REST API
- Getting Started
- Example Queries


## Overview
Using GraphQL with the Nexus API could simplify syncing operations to data warehouses, websites etc.

### The stack 
This project uses:
- [apollo server](https://github.com/apollographql/apollo-server)
- [graphql-tools](https://github.com/apollographql/graphql-tools) to generate the schema
- [GraphQL Playground](https://github.com/graphql/graphiql) for exploring the GraphQL


## Nexus REST API
The documentation for the Nexus API is available here:
https://developer.knowledge-architecture.com

Any questions related to the functionality of the Nexus REST API should be directed to [support@knowledge-architecture.com](mailto:support@knowledge-architecture.com)

## Getting Started

### Clone and Install
Clone this repo and run npm install

```
git clone https://github.com/andrewgodwin86/nexus-graphql-server <my-directory>
cd <my-directory>
npm install
```
### Create Environment Variables
Create a file named `.env` in the root of the project folder and define the KA_CLIENT_ID and KA_CLIENT_KEY variables as follows:
```
KA_CLIENT_ID="YourClientID"
KA_CLIENT_KEY="YourClientKey"
```
You can request your client ID and client key from [Knowledge Architecture](mailto:support@knowledge-architecture.com).

### Start the Server
Run the start script
```
npm start
```
The GraphQL endpoint will be available at `http://localhost:4000/graphql`

## Example queries

Copy and paste the following query snippets into GraphiQL and hit play!

A list of projects with some additional details
```javascript
{
  projects {
    project {
      projectNumber
      projectName
      clientName
      city
      state
      country
      employeeCount
    }
  }
}
```

TO-DO: Reimplement StreamItems defs
A list of Stream Items and their data
```javascript
{
  streamItemList {
    streamItemDetails {
      titleWithEntityNames
      contentWithEntityNames
      dateStamp
      displayEntityType
      itemType
      likeCount
      commentCount
      authorName
      mentionsList {
        entityID
        entityType
        entityName
        communitySiteID
        publicSite
        deleted
      }
      hashtagsList {
        hashtagID
      }
      likesList {
        authorID
        authorName
      }

    }  
  }
}
```
