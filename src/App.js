import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { Provider } from 'react-redux'

import AppRoutes from './routes';
import store from './store';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ApolloProvider>
      </Provider>
    );
  }
}

export default App;
