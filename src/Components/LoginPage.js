import React from 'react';
import './pagelayout.css';

import { checkUser } from './api';

class Login extends React.Component {
  state = {
    userInput: '',
    validUser: null
  };
  render() {
    const { userInput } = this.state;
    return (
      <div>
        <h2 className="standard_Banner"> Log In </h2>
        <div className="page_layout">
          <form onSubmit={this.handleSubmit}>
            <h3> Enter login details </h3>
            <label>
              Username:
              <input
                placeholder="tickle122"
                type="text"
                onChange={this.onChange}
                value={userInput}
              ></input>
            </label>
            <button>Login</button>
            <p>default user: tickle122</p>
          </form>
        </div>
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const { updateUser } = this.props;
    const { userInput } = this.state;
    checkUser(userInput).then(username => {
      updateUser(username);
      this.setState({ validUser: true });
    });
  };
  onChange = event => {
    this.setState({ userInput: event.target.value });
  };
}

export default Login;
