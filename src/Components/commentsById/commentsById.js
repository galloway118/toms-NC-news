import React from 'react';
import '../page.css'
import {fetchCommentsbyArticleId} from '../api'
import {Link} from '@reach/router';
import UpdateVote from './updateCommentVote';


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
                    
                    return (  
                      <UpdateVote key={comment.comment_id} comment={comment}/> )} 
        )} </ul> </div>
          </div>
    )}
}
    componentDidMount = () => {
        this.getComments();}  
    }
export default CommentsById;