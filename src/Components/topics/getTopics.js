import React from 'react';
import { fetchAllTopics } from '../api';
import '../page.css';
import ErrorHandler from '../Error/errorPage';

class Topics extends React.Component {
  state = {
    topics: [],
    isLoading: true,
    errorResponse: null
  };

  componentDidMount = () => {
    this.getAllTopics();
  };
  render() {
    const { topics, errorResponse } = this.state;
    if (this.state.isLoading) {
      return (
        <div className="welcome_page">
          <h2 className="login_Banner"> LOADING...</h2>
        </div>
      );
    } else {
      if (errorResponse) {
        return <ErrorHandler errorResponse={errorResponse} />;
      }
      return (
        <div id="topiclist">
          <p>Filter by Topic:</p>
          <ul>
            <li>
              <button value={''} onClick={this.filterByTopic}>
                All
              </button>
            </li>
            {topics.map(topic => {
              return (
                <li key={topic.slug}>
                  <button value={topic.slug} onClick={this.filterByTopic}>
                    {topic.slug}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }

  getAllTopics = () => {
    fetchAllTopics()
      .then(topics => {
        this.setState({ topics: topics, isLoading: false });
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

  filterByTopic = event => {
    this.props.updateTopic(event.target.value);
  };
}

export default Topics;
