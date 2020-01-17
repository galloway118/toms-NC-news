import React from 'react';
import '../page.css';
import { fetchAllArticles } from '../api';
import { Link } from '@reach/router';
import Topics from '../topics/getTopics';
import ErrorHandler from '../Error/errorPage';
import SortBy from '../sort_by/sort_by';

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
    if (prevState.sort_by !== this.state.sort_by) {
      this.getAllArticles();
    } else if (prevState.singleTopic !== this.state.singleTopic) {
      this.getAllArticles();
    }
  };

  render() {
    const { articles, errorResponse, isLoading } = this.state;
    if (isLoading) {
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
              <SortBy sort_By={this.sort_By} />
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

  sort_By = event => {
    return this.setState({ sort_by: event.target.value });
  };

  updateTopic = updatedTopic => {
    return this.setState({ singleTopic: updatedTopic });
  };
}

export default Articles;
