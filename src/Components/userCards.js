import React from 'react';
import './pagelayout.css';

const UserCards = ({ users }) => {
  return (
    <div className="cards">
      <ul>
        {users.map(user => {
          return <li key={user.userName}>{user.userName} <br></br>
          <br></br>
          <img
              src={user.avatarURL}
              alt="user avatar "
              width="50px"
              height="50px"
            ></img>
           </li>;
  
        })}
      </ul>
    </div>
  );
};

export default UserCards;
