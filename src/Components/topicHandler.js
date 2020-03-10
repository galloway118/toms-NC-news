import React from 'react';
import './pagelayout.css';

import { fetchAllTopics } from './api';

import ErrorHandler from './errorHandler';
import Loading from './LoadingHandler';

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
    const { topics, errorResponse, isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
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
                <li key={topic.topic_name}>
                  <button value={topic.topic_name} onClick={this.filterByTopic}>
                    {topic.topic_name}
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
