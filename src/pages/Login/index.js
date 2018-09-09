import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class LoginPage extends Component {
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
    console.log(this.state);
    ev.preventDefault();
  }

  render() {
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

export default LoginPage;
