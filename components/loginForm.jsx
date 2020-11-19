import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {
  username = React.createRef();

  state = {
    account: { username: "", password: "" }
  }

  handleSubmit = e => {
    e.preventDefault();

    const username = this.username.current.value;
    console.log(username);
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  }

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={account.password}
            label="password"
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>);
  }
}

export default LoginForm;