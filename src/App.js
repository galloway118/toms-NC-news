import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import Navbar from './Components/navBar/navBar';
import SideBar from './Components/sideBar/sideBar';
import WelcomePage from './Components/welcomePage/welcomePage';
import Articles from './Components/Articles/Articles';
import Login from './Components/Login/Login';
import Header from './Components/header/header';
import SingleArticle from './Components/singleArticle/singleArticle'
import CommentsById from './Components/commentsById/commentsById'
import UpdateVote from './Components/commentsById/updateCommentVote';
import ErrorHandler from './Components/Error/errorPage';


class App extends React.Component {
  state = { 
    sideBarOpen: false,
    username: 'tickle122'
  };
  render() {
    let sideBar;
    if(this.state.sideBarOpen) {
      sideBar = <SideBar/>;
    }
  return (
    <div className="App">
      <div className="fixed">
        <Header className="header" />
        <Navbar navBarClickHandler={this.sideBarHandler} username={this.state.username} handleLogOut={this.handleLogOut} />
        {sideBar}
        </div>
        <div className="box">
      <Router>  
      <WelcomePage path="/"/> 
      <Articles path="/Articles"/>
      
      <SingleArticle path="/Articles/:Article_id" username={this.state.username}/>
      <CommentsById path="/Articles/:Article_id/comments"/>
      <UpdateVote path="/comment/:comment_id" username={this.state.username}/>
      <Login path="/Login"/>
      <ErrorHandler default />
      </Router>
      </div>
    </div>
  );
  }
  sideBarHandler = () => {
    this.setState((prevState) => {
        return {sideBarOpen: !prevState.sideBarOpen};
    })
  };
  handleLogOut = () => {
    return this.setState({username: null})
    }
}

export default App;
