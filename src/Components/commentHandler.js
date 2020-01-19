import React from 'react';

import { removeComment } from './api';

import ErrorHandler from './errorHandler';
import Voting from './voteHandler';
import { UpdateDate } from './updateDateHandler';

class UpdateVote extends React.Component {
  state = {
    voteChange: 0,
    commentDeleted: false,
    errorResponse: '',
    filt: 'comments'
  };
  render() {
    const { comment_id, votes, created_at, author, body } = this.props.comment;
    const { errorResponse, commentDeleted, voteChange, filt } = this.state;
    if (commentDeleted) {
      return (
        <div>
          <h2 id="delete_Banner"> Comment id: {comment_id} deleted</h2>
        </div>
      );
    } else {
      if (errorResponse) {
        return <ErrorHandler errorResponse={errorResponse} />;
      } else {
        return (
          <>
            <li key={comment_id}>
              <p>
                Comment: {body}
                <br></br>
                Votes: {votes + voteChange}
                <br></br>
                Date posted: <UpdateDate created_at={created_at} />
                <br></br>
                Author: {author}
                <br></br>
              </p>
            </li>
            <Voting
              id={comment_id}
              voteChange={voteChange}
              filt={filt}
              updateVotes={this.updateVotes}
            />
            <button
              disabled={this.props.username !== this.props.comment.author}
              value={this.props.comment_id}
              onClick={this.deleteComment}
            >
              Delete Comment
            </button>
          </>
        );
      }
    }
  }

  updateVotes = value => {
    this.setState(currentState => {
      return { voteChange: currentState.voteChange + value };
    });
  };

  deleteComment = event => {
    removeComment(this.props.comment.comment_id)
      .then(() => {
        this.setState({ commentDeleted: true });
      })
      .catch(err => {
        this.setState({
          errorResponse: {
            status: err.response.status,
            msg: err.response.data.msg
          },
          isLoading: false
        });
      });
  };
}
export default UpdateVote;
