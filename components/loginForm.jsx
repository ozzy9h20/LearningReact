import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {
  username = React.createRef();
  state = {
    account: { username: "", password: "" },
    errors: {} // Using object instead of array
  }

  validate = () => {
    const errors = {};

    const { account } = this.state;
    if (account.username.trim() === '') {
      errors.username = 'Username is required.';
    }
    if (account.password.trim() === '') {
      errors.password = 'Password is required.';
    }

    return Object.keys(errors).length === 0
      ? null
      : errors;
  }

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  }

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            label="password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>);
  }
}

export default LoginForm;