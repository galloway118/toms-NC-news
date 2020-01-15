import React from 'react';
import {updateCommentVote} from '../api';

class UpdateVote extends React.Component {
    state = {
        singleComment: {},
        isLoading: true
    }
    getCommentbyId() {
        updateCommentVote(this.props.comment_id).then(singlecomment => {
            return this.setState({singleComment: singlecomment, isLoading:false})
            })
    }
    componentDidMount = () => { 
        this.getCommentbyId()  
    }
    

    render() {
        if(this.state.isLoading) {
            return (
              <div className="welcome_page">
                <h2 className="Banner">  LOADING...</h2> 
                </div>
            )}
            else {
        const {comment_id, votes, created_at, author, body} = this.state.singleComment
        
        return (
            <div>
        <div className="welcome_page">
          <h2 className="Banner">  Comment Id: {this.props.comment_id}</h2> </div>
        <div className="page_layout" id="articlelist"> 
                <ul>
        <li key={this.props.comment_id}>
        Comment Id: {comment_id} <br></br>
        Votes: {votes -1 }<br></br>
        Created At: {created_at}<br></br>
        Author: {author}<br></br>
        Comment: {body}<br></br>
            </li> 
        <button value={this.props.comment_id} onClick={this.likeComment}>Like Comment</button>
        <button value={this.props.username} onClick={this.deleteComment}>Delete Comment</button>
        </ul>
        </div> 
        </div>
        )
    } }

        likeComment = (event) => {
        updateCommentVote(event.target.value)
        .then(vote => {
            this.setState(currentState => { 
                return {singleComment: {...currentState.singleComment, votes: vote.votes}} 
            })
             })

    }
}
export default UpdateVote;

