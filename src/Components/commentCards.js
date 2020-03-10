import React from 'react';
import './pagelayout.css';

import UpdateVote from './commentHandler';

const CommentCards = ({ comments, userID }) => {
  return (
    <div className="page_layout" id="articlelist">
      <ul>
        {comments.map(comment => {
          return (
            <UpdateVote
              key={comment.id}
              comment={comment}
              username={userID}
            />
          );
        })}{' '}
      </ul>{' '}
    </div>
  );
};

export default CommentCards;
