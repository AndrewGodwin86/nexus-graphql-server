#Nexus Graphql

A GraphQL wrapper around the Knowledge Architecture Nexus API.

## Table of Contents

- Overview
- Nexus API
- Getting Started
- Server
- Client

## Overview

## Nexus API
https://developer.knowledge-architecture.com

## Getting Started

### App secrets

The Nexus API uses Basic Authentication for each request to a REST endpoint. This a a base64 encoded string of your Nexus clientID and your client secret that is passed as an Authorization header. See more info here

To run this app locally, you will need to provide your header (AuthHeader) as an environment variable.

You can set them by exporting them as environment variables in your shell: 

```sh
export AuthHeader="<your value here>"
```

## Server

## Client