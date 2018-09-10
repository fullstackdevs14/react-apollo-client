import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const HomePage = () =>
  <div className="home page">
    <Query
      query={gql`
        {
          hello
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.hello;
      }}
    </Query>
  </div>;

export default HomePage;
    