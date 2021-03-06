import React from 'react';
import './pagelayout.css';

const UserCards = ({ users }) => {
  return (
    <div className="cards">
      <ul>
        {users.map(user => {
          return <li key={user.username}>{user.username}</li>;
        })}
      </ul>
    </div>
  );
};

export default UserCards;
