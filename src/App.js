import React from 'react';
import './App.css';

import Header from './Components/fixedheader/header';
import Navbar from './Components/navBar/navBar';
import SideBar from './Components/sideBar/sideBar';

import { Router } from '@reach/router';
import WelcomePage from './Components/welcomePage';
import Articles from './Components/ArticlesPage';
import Users from './Components/usersPage';
import SingleArticle from './Components/singleArticlePage';
import Login from './Components/LoginPage';
import CommentsById from './Components/articleCommentsPage';
import ErrorHandler from './Components/errorHandler';

class App extends React.Component {
  state = {
    sideBarOpen: false,
    username: 'tickle122'
  };
  render() {
    let sideBar;
    const { sideBarOpen, username } = this.state;
    if (sideBarOpen) {
      sideBar = (
        <SideBar
          navBarClickHandler={this.sideBarHandler}
          username={username}
          handleLogOut={this.handleLogOut}
        />
      );
    }
    return (
      <div className="App">
        <div className="fixed">
          <Header className="header" />
          <Navbar
            navBarClickHandler={this.sideBarHandler}
            username={username}
            handleLogOut={this.handleLogOut}
          />
          {sideBar}
        </div>
        <Router className="box">
          <WelcomePage path="/" />
          <Articles path="/Articles" />
          <Users path="/Users" />
          <SingleArticle path="/Articles/:Article_id" username={username} />
          <CommentsById
            path="/Articles/:Article_id/comments"
            username={username}
          />
          <Login
            path="/Login"
            username={username}
            updateUser={this.updateUser}
          />
          <ErrorHandler default />
        </Router>
      </div>
    );
  }
  sideBarHandler = () => {
    this.setState(prevState => {
      return { sideBarOpen: !prevState.sideBarOpen };
    });
  };
  handleLogOut = () => {
    return this.setState({ username: null });
  };

  updateUser = user => {
    return this.setState({ username: user });
  };
}
export default App;
