import React, { Component } from 'react';
import './App.css';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo';
import Navigation from './components/Navigation';

const networkInterface = createNetworkInterface({ uri: 'http://localhost:4000/graphql'});

const client = new ApolloClient({
  networkInterface,
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Navigation />
          <p>Access GraphiQL from&nbsp; 
            <a href="http://localhost:4000/graphiql" target="_blank">http://localhost:4000/graphiql</a>
          </p>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
