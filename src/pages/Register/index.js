import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { setUser, setToken } from '../../store/actions';

const REGISTER = gql`
  mutation Register($email: String!, $password: String!, $firstname: String!, $lastname: String!) {
    signup(email: $email, password: $password, firstname: $firstname, lastname: $lastname) {
      user {
        firstname
        lastname
        email
      },
      token
    }
  }
`;


class Register extends Component {
  state = {
    email: '',
    password: '',
    firstname: '',
    lastname: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  }

  submit = (ev) => {
    console.log(this.state);
    this.props.register({variables: this.state});
    ev.preventDefault();
  }

  render() {
    const { data, setUser, setToken } = this.props;
    if (data && data.signup) {

      setToken(data.signup.token);
      setUser(data.signup.user);

      return <Redirect to="/home"/>
    }

    return (
      <div className="page register">
        <div className="register-form">
          <h1>Register</h1>
          <form onSubmit={this.submit}>
            <TextField
              label="First name"
              className="w-100"
              value={this.state.firstname}
              onChange={this.handleChange('firstname')}
              margin="normal"
            />
            <TextField
              label="Last name"
              className="w-100"
              value={this.state.lastname}
              onChange={this.handleChange('lastname')}
              margin="normal"
            />
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
              <Link to="/login">Already have an account?</Link>
              <Button type="submit" variant="contained" color="primary">
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const RegisterPage = () =>
  <Mutation mutation={REGISTER}>
    {(signup, { data }) => (
      <Register register={signup} data={data}/>
    )}
  </Mutation>;

const mapDispatchToProps = dispatch => ({
  setUser: (user) => dispatch(setUser(user)),
  setToken: (token) => dispatch(setToken(token))
})

export default connect(
  null,
  mapDispatchToProps
)(RegisterPage);
