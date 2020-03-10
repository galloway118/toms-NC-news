import React from 'react';
import './pagelayout.css';

import { Link } from '@reach/router';

const ArticleCards = ({ articles }) => {
  return (
    <div className="cards">
      <ul>
        {articles.map(article => {
          const {id} = article 
          const linkPath = `/Articles/${id}`;
          return (
            <li key={article.id}>
              <Link to={linkPath}>
                <p>
                  Article: {article.title} <br></br>By: {article.author}{' '}
                  <br></br> Topic: {article.topic}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticleCards;
