import React from 'react';
import {updateCommentVote, removeComment} from '../api';
import ErrorHandler from '../../Components/Error/errorPage';

class UpdateVote extends React.Component {
    state = {
        voteChange: 0,
        commentDeleted: false,
        errorResponse: ''
    }
     render() {
        const {errorResponse} =this.state
         if(this.state.commentDeleted){
                return (
                    <div>
                      <h2 className="article_Banner">  Comment id: {this.props.comment.comment_id} deleted</h2> 
                      </div>
                  )}  
            else {
                if(errorResponse) {
                    return <ErrorHandler errorResponse={errorResponse}/>} 
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

        <button  disabled={this.state.voteChange === 1} value="like" onClick={this.likeComment}>like</button>
        <button disabled={this.state.voteChange === -1} value="dislike" onClick={this.likeComment}>dislike</button>
        <button  disabled={this.props.username !== this.props.comment.author} value={this.props.comment_id} onClick={this.deleteComment}>Delete Comment</button>
        </>
        )
    }
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
            })}
        }

    deleteComment = (event) => {
        console.log(event.target.value)
        removeComment(this.props.comment.comment_id).then(() => {
            this.setState({commentDeleted: true})
        }).catch(err => {
            this.setState({errorResponse: {status: err.response.status,
            msg: err.response.data.msg}, isLoading:false})
        })
    }
}
export default UpdateVote;

