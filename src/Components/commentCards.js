import React from 'react';
import './pagelayout.css';

import UpdateVote from './commentHandler';

const CommentCards = ({ comments, username }) => {
  return (
    <div className="page_layout" id="articlelist">
      <ul>
        {comments.map(comment => {
          return (
            <UpdateVote
              key={comment.comment_id}
              comment={comment}
              username={username}
            />
          );
        })}{' '}
      </ul>{' '}
    </div>
  );
};

export default CommentCards;
