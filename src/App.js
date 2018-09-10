import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from "react-apollo";
import AppRoutes from './routes';
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
