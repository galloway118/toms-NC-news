import React from 'react';
import './pagelayout.css';

import { fetchCommentsbyArticleId, postComment } from './api';

import CommentCards from './commentCards';
import Loading from './LoadingHandler';

class CommentsById extends React.Component {
  state = {
    comments: [],
    isLoading: true,
    newComment: '',
    err: null
  };

  componentDidMount = () => {
    this.getComments();
  };

  render() {
    const { comments, newComment, isLoading } = this.state;
    const { Article_id, username } = this.props;
    return isLoading ? (
      <Loading />
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
        <CommentCards comments={comments} username={username} />
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
