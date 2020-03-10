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
    filt: 'comment'
  };
  render() {
    const { id, votes, created_at, userID, body } = this.props.comment;
    console.dir(this.props, "h")
    const { errorResponse, commentDeleted, voteChange, filt } = this.state;
    if (commentDeleted) {
      return (
        <div>
          <h2 id="delete_Banner"> Comment id: {id} deleted</h2>
        </div>
      );
    } else {
      if (errorResponse) {
        return <ErrorHandler errorResponse={errorResponse} />;
      } else {
        return (
          <>
            <li key={id}>
              <p>
                Comment: {body}
                <br></br>
                Votes: {votes + voteChange}
                <br></br>
                Date posted: <UpdateDate created_at={created_at} />
                <br></br>
                Author: {userID}
                <br></br>
              </p>
            </li>
            <Voting
              id={id}
              voteChange={voteChange}
              filt={filt}
              updateVotes={this.updateVotes}
            />
            <button
              disabled={this.props.username !== this.props.comment.userID}
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
    removeComment(this.props.comment.id)
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
