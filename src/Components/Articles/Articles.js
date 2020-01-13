import React, {Component} from 'react';
import '../page.css'
import {fetchAllArticles} from '../api'
import {Link} from '@reach/router';

class Articles extends React.Component {
    
    state ={ 
        articles: []
    }

    getAllArticles = () =>  {
        fetchAllArticles().then(articles => 
            this.setState({articles:articles}))
    }

    render () {
    const {articles} = this.state;
    return (
        <div>
        <div className="welcome_page">
          <h2 className="Banner">  Articles</h2>
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

    componentDidMount = () => {
        this.getAllArticles();
    }
}

export default Articles;