import React, { Component } from 'react';

import { fetchArticlebyId } from './api';
import { Link } from '@reach/router';

import ErrorHandler from './errorHandler';
import Voting from './voteHandler';
import { UpdateDate } from './updateDateHandler';
import Loading from './LoadingHandler';

class SingleArticle extends Component {
  state = {
    SingleArticle: {},
    voteChange: 0,
    isLoading: true,
    errorResponse: null,
    filt: 'article'
  };

  componentDidMount = () => {
    this.getSingleArticle();
  };

  render() {
    const {
      title,
      id,
      topic,
      userID,
      body,
      created_at,
      votes,
      commentCount
    } = this.state.SingleArticle;

    const { errorResponse, isLoading, voteChange, filt } = this.state;
    const linkPath = `/Articles/${id}/comments`;
    if (isLoading) {
      return <Loading />;
    } else {
      if (errorResponse) {
        return <ErrorHandler errorResponse={errorResponse} />;
      } else {
        return (
          <div>
            <h2 className="Banner"> Article</h2>{' '}
            <div className="page_layout" id="articlelist">
              <ul>
                <li key={title}>Title: {title}</li>
                <li key={topic}>Topic: {topic} </li>
                <li key={userID}>Author: {userID} </li>
                <li key={body}>Article: {body} </li>
                <li key={created_at}>
                  Posted on: <UpdateDate created_at={created_at} />{' '}
                </li>
                <li key={votes}>Votes: {votes + voteChange} </li>
                <li key={id + commentCount}>
                  Comment Count: {commentCount}{' '}
                </li>
              </ul>
              <button onClick={this.getComments}>
                <Link to={linkPath}> View Comments</Link>
              </button>
              <Voting
                id={id}
                voteChange={voteChange}
                filt={filt}
                updateVotes={this.updateVotes}
              />
            </div>
          </div>
        );
      }
    }
  }

  getSingleArticle = () => {
    const { Article_id } = this.props;

    fetchArticlebyId(Article_id)
      .then(article => {
        this.setState({ SingleArticle: article, isLoading: false });
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

  updateVotes = value => {
    this.setState(currentState => {
      return { voteChange: currentState.voteChange + value };
    });
  };
}

export default SingleArticle;
