import React, { Component } from "react";
import {fetchArticlebyId, updateArticleVote} from '../api';
import {Link} from '@reach/router';
import ErrorHandler from '../Error/errorPage';


class SingleArticle extends Component {

    state = {
      SingleArticle: {
      },
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
        <div className="welcome_page">
          <h2 className="Banner">  LOADING...</h2> 
          </div>
      )} else {
        if(errorResponse) {
            return <ErrorHandler errorResponse={errorResponse}/>} 
        else {
    return (
        <div>
        <div className="welcome_page">
          <h2 className="Banner">  Article</h2> </div>
        <div className="page_layout" id="articlelist"> 
        <ul >
           <li key={title}>Title: {title}</li>
          <li key={article_id}>Article_Id: {article_id}</li>
          <li key={topic}>Topic: {topic} </li>
          <li key={author}>Author: {author} </li>
          <li key={body}>Article: {body} </li>
          <li key={created_at}>Created At: {created_at} </li>
          <li key={votes }>Votes: {votes} </li>
          <li key={article_id + comment_count}>Comment Count: {comment_count} </li>
        </ul> 
        <button onClick={this.getComments}><Link to={linkPath}> View Comments</Link></button>
        <button onClick={this.addVotes}>Like Article</button>
        </div>
            </div>
    )
}
        }
}
addVotes = (event) => {
    updateArticleVote(this.state.SingleArticle.article_id)
    .then(vote => {
        this.setState(currentState => {   
          return {SingleArticle: {...currentState.SingleArticle, votes: vote}}
        }).catch(err => {
          this.setState({errorResponse: {status: err.response.status,
          msg: err.response.data.msg}, isLoading:false})
      })
        })
      }
}

export default SingleArticle;