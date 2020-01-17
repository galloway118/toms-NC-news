import React from 'react';
import '../page.css';
import { fetchAllArticles } from '../api';
import { Link } from '@reach/router';
import Topics from '../topics/getTopics';
import ErrorHandler from '../Error/errorPage';

class Articles extends React.Component {
  state = {
    articles: [],
    sort_by: 'created_at',
    singleTopic: 'football',
    isLoading: true,
    errorResponse: null
  };

  getAllArticles = () => {
    fetchAllArticles(this.state.sort_by, this.state.singleTopic)
      .then(articles => {
        this.setState({ articles: articles, isLoading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          errorResponse: {
            status: err.response.status,
            msg: err.response.data.msg
          },
          isLoading: false
        });
      });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.sort_by !== this.state.sort_by) {
      this.getAllArticles();
    } else if (prevState.singleTopic !== this.state.singleTopic) {
      this.getAllArticles();
    }
  };

  render() {
    const { articles, errorResponse } = this.state;
    if (this.state.isLoading) {
      return (
        <div>
          <h2 className="login_Banner"> LOADING...</h2>
        </div>
      );
    } else {
      if (errorResponse) {
        return <ErrorHandler err={errorResponse} />;
      } else {
        return (
          <div>
            <div className="welcome_page">
              <h2 className="article_Banner"> Articles</h2>
            </div>
            <div className="sort_by_list">
              <Topics updateTopic={this.updateTopic} />
              <div>
                <p>Sort By:</p>
                <button value="created_at" onClick={this.sort_By}>
                  Date Created
                </button>
                <button value="comment_count" onClick={this.sort_By}>
                  Comment Count
                </button>
                <button value="votes" onClick={this.sort_By}>
                  Votes
                </button>
                <button value="author" onClick={this.sort_By}>
                  Author
                </button>
                <button value="title" onClick={this.sort_By}>
                  Title
                </button>
              </div>
            </div>
            <div className="page_layout">
              <ul>
                {articles.map(article => {
                  const linkPath = `/Articles/${article.article_id}`;
                  return (
                    <li key={article.article_id}>
                      <Link to={linkPath}>
                        <p>
                          Article: {article.title} <br></br>By: {article.author}
                        </p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      }
    }
  }
  sort_By = event => {
    return this.setState({ sort_by: event.target.value });
  };

  updateTopic = updatedTopic => {
    return this.setState({ singleTopic: updatedTopic });
  };

  componentDidMount = () => {
    this.getAllArticles();
  };
}

export default Articles;
