import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const QueryExample = () =>
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

const HomePage = ({ user, token }) =>
    <div className="home page">
      {user &&
        <h1>Welcome {user.firstname + ' ' + user.lastname}!</h1>}
      <div>{token}</div>
      <QueryExample />
    </div>;


const mapStateToProps = (state) => ({
  user: state.user,
  token: state.token
})

export default connect(
  mapStateToProps,
  null
)(HomePage);
    