import React, { Component } from "react";
import {fetchArticlebyId, updateArticleVote} from '../api';
import {Link} from '@reach/router';


class SingleArticle extends Component {

    state = {
      SingleArticle: {
      },
      articleDeleted: false
    }
    getSingleArticle =( ) => {
        fetchArticlebyId(this.props.Article_id).then(article => {
          this.setState({SingleArticle: article})
        })
      }
      componentDidMount= () => {
        this.getSingleArticle();
      }

render () {
    const {title, article_id, topic, author, body, created_at, votes, comment_count} = this.state.SingleArticle
    const linkPath = `/Articles/${article_id}/comments`;
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
        <button onClick={this.addVotes}>Like Article</button>
        <button onClick={this.getComments}><Link to={linkPath}>View Comments</Link></button>
        </div>
            </div>
    )
}
addVotes = (event) => {
    updateArticleVote(this.state.SingleArticle.article_id)
    .then(vote => {
        this.setState(currentState => {   
          return {SingleArticle: {...currentState.SingleArticle, votes: vote}}
        })
        })

}




}

export default SingleArticle;