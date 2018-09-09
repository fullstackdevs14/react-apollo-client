import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class RegisterPage extends Component {
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
      <div className="page register">
        <div className="register-form">
          <h1>Register</h1>
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
              <a href="#">Don't have an account?</a>
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

export default RegisterPage;
