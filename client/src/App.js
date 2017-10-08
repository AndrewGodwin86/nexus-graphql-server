import React, { Component } from 'react';
import './App.css';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo';
import Navigation from './components/Navigation';
import Grid from './components/Grid';

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
          <Grid />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
