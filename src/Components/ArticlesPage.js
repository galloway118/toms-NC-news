import React from 'react';
import './pagelayout.css';

import { fetchAllArticles } from './api';

import ErrorHandler from './errorHandler';
import Topics from './topicHandler';
import SortBy from './sort_by_Handler';
import ArticleCards from './articleCards';
import Loading from './LoadingHandler';

class Articles extends React.Component {
  state = {
    articles: [],
    sort_by: 'created_at',
    singleTopic: '',
    isLoading: true,
    errorResponse: null
  };

  componentDidMount = () => {
    this.getAllArticles();
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { sort_by, singleTopic } = this.state;
    if (prevState.sort_by !== sort_by) {
      this.getAllArticles();
    } else if (prevState.singleTopic !== singleTopic) {
      this.getAllArticles();
    }
  };

  render() {
    const { articles, errorResponse, isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
    } else {
      if (errorResponse) {
        return <ErrorHandler err={errorResponse} />;
      } else {
        return (
          <div>
            <h2 className="article_Banner"> All articles</h2>
            <div className="sort_by_list">
              <Topics updateTopic={this.updateTopic} />
              <SortBy sort_By={this.sort_By} />
              <ArticleCards articles={articles} />
            </div>
          </div>
        );
      }
    }
  }

  getAllArticles = () => {
    const { sort_by, singleTopic } = this.state;
    fetchAllArticles(sort_by, singleTopic)
      .then(articles => {
        this.setState({ articles: articles, isLoading: false });
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

  sort_By = event => {
    return this.setState({ sort_by: event.target.value });
  };

  updateTopic = updatedTopic => {
    return this.setState({ singleTopic: updatedTopic });
  };
}

export default Articles;
