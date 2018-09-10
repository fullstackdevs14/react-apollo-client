import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Mutation } from "react-apollo";
import gql from 'graphql-tag';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { setUser, setToken } from '../../store/actions';

const LOGIN = gql`
mutation LOGIN($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      email
      firstname
      lastname
    }
    token
  }
}
`;

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  }

  submit = (ev) => {
    this.props.login({variables: this.state});
    ev.preventDefault();
  }

  render() {
    const { data, setUser, setToken } = this.props;

    if (data && data.login) {
      setUser(data.login.user);
      setToken(data.login.token);

      return <Redirect to="/home"/>
    }

    return (
      <div className="page login">
        <div className="login-form">
          <h1>Login</h1>
          <form onSubmit={this.submit} noValidate autoComplete="off">
            <TextField
              type="email"
              label="Email"
              className="w-100"
              value={this.state.email}
              onChange={this.handleChange('email')}
              margin="normal"
            />
            <TextField
              type="password"
              label="Password"
              className="w-100"
              value={this.state.password}
              onChange={this.handleChange('password')}
              margin="normal"
            />
            <div className="row space-between h-center mt-16">
              <Link to="/register">Don't have an account?</Link>
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: (user) => dispatch(setUser(user)),
  setToken: (token) => dispatch(setToken(token))
})

const ConnectedLogin = connect(
  null,
  mapDispatchToProps
)(Login);

const LoginPage = () =>
  <Mutation mutation={LOGIN}>
    {(login, { data }) => (
      <ConnectedLogin {...{login, data}}/>
    )}
  </Mutation>;

export default LoginPage;
