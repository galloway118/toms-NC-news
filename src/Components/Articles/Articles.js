import React, {Component} from 'react';
import '../page.css'
import {fetchAllArticles} from '../api'
import {Link} from '@reach/router';
import Topics from '../topics/getTopics'

// import SortBy from '../sortBy/sortBy'

class Articles extends React.Component {
    
    state ={ 
        articles: [],
        sort_by: 'created_at',
        singleTopic: 'football'
    }

    getAllArticles = () =>  {
        fetchAllArticles(this.state.sort_by, this.state.singleTopic).then(articles => 
            this.setState({articles:articles}))
        }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.sort_by !== this.state.sort_by)
        {
        this.getAllArticles(); }

        else if(prevState.singleTopic !== this.state.singleTopic){
            console.log("ffff")
            this.getAllArticles();
        }
     }

    render () {
    const {articles} = this.state;
    return (
        <div>
        <div className="welcome_page">
          <h2 className="Banner">  Articles</h2>
        </div>
        <div className="page_layout"> 
        <div> 
        <Topics updateTopic={this.updateTopic}/>
        {/* <SortBy sortBy={this.state.sortBy}/> */}
        </div>
        <div><p>Sort By:</p>
        <button value="created_at" onClick={this.sort_By} >Date Created</button> 
        <button value="comment_count" onClick={this.sort_By} >Comment Count</button>
        <button value="votes" onClick={this.sort_By}>Votes</button>
        <button value="author" onClick={this.sort_By}>Author</button>
        <button value="title" onClick={this.sort_By}>Title</button>
        </div>
        </div>
        <div className="page_layout" id="articlelist"> 
            <ul >
                {articles.map(article => {
                    const linkPath = `/Articles/${article.article_id}`
                    return (
                        <li key={article.article_id}>
                            <Link to={linkPath}><p>Article: {article.title} <br></br>By: {article.author}</p></Link></li>);
                })}
            </ul>
          </div>
          </div>

    )
    }
    sort_By = (event) => { 
        return this.setState({ sort_by: event.target.value}      
    )
}

    updateTopic = (updatedTopic) => {
    return this.setState({singleTopic: updatedTopic})
}

    componentDidMount = () => {
        this.getAllArticles();
    }
}

export default Articles;