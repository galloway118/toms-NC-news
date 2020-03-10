import React from 'react';

const SortBy = ({ sort_By }) => {
  return (
    <div>
      <p>Sort By:</p>
      <button value="created_at" onClick={sort_By}>
        Date Created
      </button>
      <button value="votes" onClick={sort_By}>
        Votes
      </button>
      <button value="userID" onClick={sort_By}>
        Author
      </button>
      <button value="title" onClick={sort_By}>
        Title
      </button>
    </div>
  );
};

export default SortBy;
