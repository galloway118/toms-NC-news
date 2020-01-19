import React from 'react';
import './pagelayout.css';

import { checkUser } from './api';
import { Router } from '@reach/router';

import WelcomePage from './welcomePage';

class Login extends React.Component {
  state = {
    userInput: '',
    validUser: null,
    errorResponse: null
  };
  render() {
    const { userInput, errorResponse, validUser } = this.state;
    return validUser === true ? (
      <Router>
        <WelcomePage path="/" />
      </Router>
    ) : (
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
            <button> Login</button>
          </form>
        </div>
        <div className="page_layout">
          {errorResponse !== null ? (
            <p>{errorResponse} : Log in with "tickle122"</p>
          ) : (
            <p>Log in with: tickle122</p>
          )}
        </div>
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const { updateUser } = this.props;
    const { userInput } = this.state;
    checkUser(userInput)
      .then(username => {
        updateUser(username);
        this.setState({ validUser: true });
      })
      .catch(err => {
        this.setState({
          errorResponse: 'invalid username',
          isLoading: false
        });
      });
  };
  onChange = event => {
    this.setState({ userInput: event.target.value });
  };
}

export default Login;
