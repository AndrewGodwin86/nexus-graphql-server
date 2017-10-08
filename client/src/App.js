import React, { Component } from 'react';
import './App.css';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Index from './pages/Index';


const networkInterface = createNetworkInterface({ uri: 'http://localhost:4000/graphql'});

const client = new ApolloClient({
  networkInterface,
});


class App extends Component {
  render() {
    return (
      <Router>
        <ApolloProvider client={client}>
          <div className="App">
            <Navigation />
            <Switch>
              <Route exact name="index" path="/" component={Index} />
            </Switch>
          </div>
        </ApolloProvider>
      </Router>
    );
  }
}

export default App;
