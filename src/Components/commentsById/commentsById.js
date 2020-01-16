import React from 'react';
import '../page.css'
import './comment.css'
import {fetchCommentsbyArticleId, postComment} from '../api'
import UpdateVote from './commentCard';


class CommentsById extends React.Component {
    state ={ 
        comments: [],
        isLoading: true,
        newComment: '',
        err: null
    }

    getComments = (event) => {
        fetchCommentsbyArticleId(this.props.Article_id).then( comments => {
                this.setState({comments:comments, isLoading: false})
        }).catch(err => {
            this.setState({errorResponse: {status: err.response.status,
                msg: err.response.data.msg}, isLoading:false})
    })
    }
    render () {
        
    const {comments} = this.state;
    if(this.state.isLoading) {
        return (
          <div className="welcome_page">
            <h2 className="Banner">  LOADING...</h2> 
            </div>
        )} else {
    return (
        <div>
        <div className="welcome_page">
          <h2 className="article_Banner">  Comments for Article Id: {this.props.Article_id} </h2>
        </div>
        <div className="page_layout" id="articlelist"> 
        <div className="comment">
        <form onSubmit={this.handleSubmit}>
        <label> Comment:
            <input
            type="text"
              onChange={this.onChange}
              value={this.state.newComment}></input>
        </label>
        <button id="comment_button" disabled={this.props.username === null || this.state.newComment === null}>Submit Comment</button>
        </form>
        </div>
        </div>
        <div className="page_layout" id="articlelist">
           
            <ul>
                {comments.map(comment => {
                    return (  
                      <UpdateVote  key={comment.comment_id} comment={comment} username={this.props.username}/> )} 
        )} </ul> </div>
          </div>
    )}
}
    componentDidMount = () => {
        this.getComments();}  

    onChange = (event) => {
        this.setState({newComment: event.target.value})
        }

    handleSubmit = (event) => {
        event.preventDefault();
        const {newComment} = this.state
        const {Article_id, username} =this.props
        postComment(Article_id, username, newComment).then(comment => {
         this.setState((currentState) => {
            return {comments: [comment, ...currentState.comments]
            }
        })
    }).catch(err => {
        this.setState({errorResponse: {status: err.response.status,
            msg: err.response.data.msg}, isLoading:false})
})
}
}
export default CommentsById;