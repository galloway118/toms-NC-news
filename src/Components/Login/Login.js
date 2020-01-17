import React from 'react';
import '../page.css'
import {checkUser} from '../api'

class Login extends React.Component {

  state = {
    userInput: '',
    validUser: null
  }
  render() {
    return (
        <div>
        <div className="welcome_page">
          <h2 className="login_Banner">  Log In </h2>
        </div>
        <div className="page_layout">
          <form  onSubmit={this.handleSubmit}>
            <h3> Enter login details </h3>
            <label>
            Username:
              <input placeholder="tickle122"
              type="text"
              onChange={this.onChange}
              value={this.state.userInput}></input>
            </label>
            <button>Login</button>
            <p>default user: tickle122</p>
          </form>
          </div>
          </div>
    )}

    handleSubmit = (event) => {
      event.preventDefault();
      const {userInput} = this.state
      checkUser(userInput).then(username => {
        this.props.updateUser(username);
        this.setState({validUser: true})
      })
    }
    onChange = (event) => {
      this.setState({userInput: event.target.value})
    }
}

export default Login;