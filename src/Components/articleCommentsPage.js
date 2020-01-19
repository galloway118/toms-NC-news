import React from 'react';
import './pagelayout.css';

import { fetchCommentsbyArticleId, postComment } from './api';

import UpdateVote from './commentHandler';

class CommentsById extends React.Component {
  state = {
    comments: [],
    isLoading: true,
    newComment: '',
    err: null
  };

  render() {
    const { comments, newComment, isLoading } = this.state;
    const { Article_id, username } = this.props;
    return isLoading ? (
      <div>
        <h2 className="standard_Banner"> LOADING...</h2>
      </div>
    ) : (
      <div>
        <h2 className="standard_Banner">
          {' '}
          Comments for Article Id: {Article_id}{' '}
        </h2>
        <div className="page_layout" id="articlelist">
          <div className="comment">
            <form onSubmit={this.handleSubmit}>
              <label>
                {' '}
                Comment:
                <input
                  type="text"
                  onChange={this.onChange}
                  value={newComment}
                ></input>
              </label>
              <button
                id="comment_button"
                disabled={username === null || newComment === ''}
              >
                Submit Comment
              </button>
            </form>
          </div>
        </div>
        <div className="page_layout" id="articlelist">
          <ul>
            {comments.map(comment => {
              return (
                <UpdateVote
                  key={comment.comment_id}
                  comment={comment}
                  username={username}
                />
              );
            })}{' '}
          </ul>{' '}
        </div>
      </div>
    );
  }

  getComments = () => {
    const { Article_id } = this.props;
    fetchCommentsbyArticleId(Article_id)
      .then(comments => {
        this.setState({ comments: comments, isLoading: false });
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

  componentDidMount = () => {
    this.getComments();
  };

  onChange = event => {
    this.setState({ newComment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { newComment } = this.state;
    const { Article_id, username } = this.props;
    postComment(Article_id, username, newComment)
      .then(comment => {
        this.setState(currentState => {
          return {
            comments: [comment, ...currentState.comments],
            newComment: ''
          };
        });
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
export default CommentsById;
