import React, { Component } from 'react';

class LoginForm extends Component {
  username = React.createRef();

  handleSubmit = e => {
    e.preventDefault();

    const username = this.username.current.value;
    console.log("Submitted");
  };

  // componentDidMount() {
  //   this.username.current.focus();
  // }

  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input ref={this.username} id="username" type="text" className="form-control" autoFocus />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" className="form-control" />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>);
  }
}

export default LoginForm;