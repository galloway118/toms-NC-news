import React from 'react';
import {updateCommentVote, removeComment} from '../api';

class UpdateVote extends React.Component {
    state = {
        voteChange: 0,
        commentDeleted: false
    }
     render() {
         if(this.state.commentDeleted){
                return (
                    <div className="welcome_page">
                      <h2 className="Banner">  Comment deleted</h2> 
                      </div>
                  )}  
            else {
        const {comment_id, votes, created_at, author, body} = this.props.comment
        return (
            <>
            <li key={comment_id}><p>
            Comment Id: {comment_id} <br></br>
            Votes: {votes + this.state.voteChange}<br></br>
            Created At: {created_at}<br></br>
            Author: {author}<br></br>
            Comment: {body}<br></br></p>
</li> 

        <button  disabled={this.state.voteChange === 1} value="like" onClick={this.likeComment}>Like</button>

        <button disabled={this.state.voteChange === -1} value="dislike" onClick={this.likeComment}>Dislike</button>
        <button  disabled={this.props.comment.username===null}value={this.props.comment_id} onClick={this.deleteComment}>Delete Comment</button>
        </>
        )
    } }

    likeComment = (event) => {
        if(event.target.value === 'like'){
        updateCommentVote(this.props.comment.comment_id, 1)
        this.setState((currentState) => {
            return {voteChange: currentState.voteChange + 1}
        })
    } else {
            updateCommentVote(this.props.comment.comment_id, -1)
            this.setState((currentState) => {
                return {voteChange: currentState.voteChange -1}
            })
    }
    }

    deleteComment = (event) => {
        removeComment(event.target.value).then(() => {
            this.setState({commentDeleted: true})
        })
    }
}
export default UpdateVote;

