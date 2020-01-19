import React from 'react';
import { updateVote } from './api';

const Voting = ({ id, filt, voteChange, updateVotes }) => {
  const likeComment = event => {
    if (event.target.value === 'like') {
      updateVotes(1);
      updateVote(id, 1, filt);
    } else {
      updateVotes(-1);
      updateVote(id, -1, filt);
    }
  };

  return (
    <>
      <button disabled={voteChange === 1} value="like" onClick={likeComment}>
        like
      </button>
      <button
        disabled={voteChange === -1}
        value="dislike"
        id="comments"
        onClick={likeComment}
      >
        dislike
      </button>
    </>
  );
};
export default Voting;
