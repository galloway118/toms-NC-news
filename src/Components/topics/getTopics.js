import React from 'react';
import {fetchAllTopics} from '../api';
import '../page.css';


class Topics extends React.Component {
state = {
    topics: [],
    isLoading: true
}

componentDidMount= () => {
    this.getAllTopics();
  }
  render() {
    const {topics} = this.state;
    if(this.state.isLoading) {
        return (
          <div className="welcome_page">
            <h2 className="Banner">  LOADING...</h2> 
            </div>
        )} else {
  return (
      <div id="topiclist">
          <p>Filter by Topic:</p>
          <ul>
              {topics.map(topic => {
                 return  <li key={topic.slug}><button value={topic.slug} onClick={this.filterByTopic}>{topic.slug}</button></li>

              })}
            </ul>
      </div>
  )
}
  }
getAllTopics = () => {
        fetchAllTopics().then(topics => {
            this.setState({topics: topics, isLoading:false})
        })
}

filterByTopic = (event) => {
    this.props.updateTopic(event.target.value)
}
}

export default Topics;