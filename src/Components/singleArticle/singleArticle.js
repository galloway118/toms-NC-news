import React, { Component } from "react";
import {fetchArticlebyId} from '../api';

class SingleArticle extends Component {

    state = {
      SingleArticle: {
      },
      articleDeleted: false
    }

    getSingleArticle =( ) => {
        console.log(this.props)
        fetchArticlebyId(this.props.Article_id).then(article => {
          this.setState({SingleArticle: article})
        })
      }
    
      componentDidMount= () => {
        this.getSingleArticle();
      }

render () {
    const {title, article_id, topic, author, body, created_at, votes, comment_count} = this.state.SingleArticle
    return (
        <div>
        <div className="welcome_page">
          <h2 className="Banner">  Article</h2> </div>
        <div className="page_layout"> 
        <ul className="articlelist">
           <li key={title}>Title: {title}</li>
          <li key={article_id}>Article_Id: {article_id}</li>
          <li key={topic}>Topic: {topic} </li>
          <li key={author}>Author: {author} </li>
          <li key={body}>Article: {body} </li>
          <li key={created_at}>Created At: {created_at} </li>
          <li key={votes}>Votes: {votes} </li>
          <li key={comment_count}>Comment Count: {comment_count} </li>
        </ul> 
        </div>
            </div>
    )
}
}

export default SingleArticle;