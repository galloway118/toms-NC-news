import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import Navbar from './Components/navBar/navBar';
import SideBar from './Components/sideBar/sideBar';
import WelcomePage from './Components/welcomePage/welcomePage';
import Articles from './Components/Articles/Articles';
import Login from './Components/Login/Login';
import Error from './Components/Error/errorPage';
import Header from './Components/header/header';
import SingleArticle from './Components/singleArticle/singleArticle'
import CommentsById from './Components/commentsById/commentsById'


class App extends React.Component {
  state = { 
    sideBarOpen: false,
    user: "Tom"
  };
  render() {
    let sideBar;
    if(this.state.sideBarOpen) {
      sideBar = <SideBar/>;
    }
  return (
    <div className="App">
      <div className="fixed">
        <Header className="header" user={this.state.user}/>
        <Navbar navBarClickHandler={this.sideBarHandler}/>
        {sideBar}
        </div>
        <div className="box">
      <Router>  
      <WelcomePage path="/"/> 
      <Articles path="/Articles"/>
      <SingleArticle path="/Articles/:Article_id"/>
      <CommentsById path="/Articles/:Article_id/comments"/>
      <Login path="/Login"/>
      <Error default />
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

}

export default App;
