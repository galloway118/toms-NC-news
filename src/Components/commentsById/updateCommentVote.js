import React from 'react';
import {updateCommentVote} from '../api';

class UpdateVote extends React.Component {
    state = {
        singleComment: {}
    }

    componentDidMount = (props) => {

        this.setState({singleComment: this.props.comment_id});
    }
    render() {
        return ( 
        <button onClick={this.likeComment}>Like Comment</button>  
        )
    }

    likeComment = (event) => {
        updateCommentVote(this.props.comment.comment_id)
        .then(vote => {
            this.setState(currentState => { 
                return {comment: {...currentState.singleComment, votes: vote}} 
            })
            })
}
}
export default UpdateVote;

