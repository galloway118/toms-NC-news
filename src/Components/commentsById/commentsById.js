import React from 'react';
import '../page.css'
import {fetchCommentsbyArticleId, postComment} from '../api'
import UpdateVote from './commentCard';


class CommentsById extends React.Component {
    state ={ 
        comments: [],
        isLoading: true,
        newComment: ''
    }

    getComments = (event) => {
        fetchCommentsbyArticleId(this.props.Article_id).then( comments => {
                this.setState({comments:comments, isLoading: false})
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
          <h2 className="Banner">  Comments for Article Id: {this.props.Article_id} </h2>
        </div>
        <div className="page_layout" id="articlelist"> 
        <form onSubmit={this.handleSubmit}>
        <label> Add new Comment
            <input
            type="text"
              onChange={this.onChange}
              value={this.state.newComment}></input>
        </label>
        <button>Submit Comment</button>
        </form>
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
         console.log(comment, 'handleSubmit')
         this.setState((currentState) => {
            return {comments: [comment, ...currentState.comments]
            }
        })
    })
}
}
export default CommentsById;