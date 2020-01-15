import React from 'react';
import '../page.css'
import {fetchCommentsbyArticleId} from '../api'
import {Link} from '@reach/router';


class CommentsById extends React.Component {
    state ={ 
        comments: [],
        isLoading: true}

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
        <label> Add new Comment
            <input></input>
        </label>
        <button>Submit Comment</button>
        </div>
        <div className="page_layout" id="articlelist">
           
            <ul>
                {comments.map(comment => {
                    const linkPath = `/comment/${comment.comment_id}`
                    return (  
                        <li key={comment.comment_id}><Link to={linkPath}><p>
                        Comment Id: {comment.comment_id} <br></br>
                        Votes: {comment.votes}<br></br>
                        Created At: {comment.created_at}<br></br>
                        Author: {comment.author}<br></br>
                        Comment: {comment.body}<br></br></p></Link>
            </li> )} 
        )} </ul> </div>
          </div>
    )}
}
    componentDidMount = () => {
        this.getComments();}  
    }
export default CommentsById;