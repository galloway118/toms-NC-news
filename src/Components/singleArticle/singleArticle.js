import React, { Component } from "react";
import {fetchArticlebyId, updateArticleVote} from '../api';
import {Link} from '@reach/router';
import ErrorHandler from '../Error/errorPage';


class SingleArticle extends Component {

    state = {
      SingleArticle: {
      },
      voteChange: 0,
      isLoading: true,
      errorResponse: null
    }
    getSingleArticle =( ) => {
        fetchArticlebyId(this.props.Article_id).then(article => {
          this.setState({SingleArticle: article, isLoading: false})
        }).catch(err => {
          this.setState({errorResponse: {status: err.response.status,
          msg: err.response.data.msg}, isLoading:false})
      })
    }
      componentDidMount= () => {
        this.getSingleArticle();
      }

render () {
    const {title, article_id, topic, author, body, created_at, votes, comment_count} = this.state.SingleArticle
    const {errorResponse} =this.state
    const linkPath = `/Articles/${article_id}/comments`;
    if(this.state.isLoading) {
      return (
        <div>
          <h2 className="login_Banner">  LOADING...</h2> 
          </div>
      )} else {
        if(errorResponse) {
            return <ErrorHandler errorResponse={errorResponse}/>} 
        else {
    return (
        <div>
        <div>
          <h2 className="Banner">  Article</h2> </div>
        <div className="page_layout" id="articlelist"> 
        <ul >
           <li key={title}>Title: {title}</li>
          <li key={article_id}>Article_Id: {article_id}</li>
          <li key={topic}>Topic: {topic} </li>
          <li key={author}>Author: {author} </li>
          <li key={body}>Article: {body} </li>
          <li key={created_at}>Created At: {created_at} </li>
          <li key={votes }>Votes: {votes + this.state.voteChange} </li>
          <li key={article_id + comment_count}>Comment Count: {comment_count} </li>
        </ul> 
        <button onClick={this.getComments}><Link to={linkPath}> View Comments</Link></button>
        <button disabled={this.state.voteChange === 1} value="like" onClick={this.addVotes}>like</button>
        <button  disabled={this.state.voteChange === -1} value="dislike" onClick={this.addVotes}>dislike</button>
        </div>
            </div>
    )}
        }
}

addVotes = (event) => {
  if(event.target.value === 'like'){
    updateArticleVote(this.state.SingleArticle.article_id, 1)
     this.setState(currentState => {   
          return  {voteChange: currentState.voteChange + 1}
        })
    }
  else {
    updateArticleVote(this.state.SingleArticle.article_id, -1)
  this.setState((currentState) => {
    return {voteChange: currentState.voteChange -1}
})}
}
}

export default SingleArticle;