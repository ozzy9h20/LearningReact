import React, { Component } from 'react';

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
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={account.username}
              onChange={this.handleChange}
              ref={this.username}
              id="username"
              name="username"
              type="text"
              className="form-control"
              autoFocus />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              onChange={this.handleChange}
              id="password"
              name="password"
              type="password"
              className="form-control" />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>);
  }
}

export default LoginForm;