import React from 'react';
import './pagelayout.css';

import { fetchAllUsers } from './api';

import ErrorHandler from './errorHandler';
import UserCards from './userCards';

class Users extends React.Component {
  state = {
    users: [],
    errorResponse: null,
    isLoading: null
  };

  componentDidMount = () => {
    this.getAllUsers();
  };
  render() {
    const { errorResponse, isLoading, users } = this.state;
    if (isLoading) {
      return (
        <div>
          <h2 className="article_Banner"> LOADING...</h2>
        </div>
      );
    } else {
      if (errorResponse) {
        return <ErrorHandler err={errorResponse} />;
      } else {
        return (
          <div>
            <h2 className="Banner"> Users</h2>
            <div className="sort_by_list">
              <UserCards users={users} />
            </div>
          </div>
        );
      }
    }
  }
  getAllUsers = () => {
    fetchAllUsers()
      .then(users => {
        this.setState({ users: users, isLoading: false });
      })
      .catch(err => {
        this.setState({
          errorResponse: {
            status: err.response.status,
            msg: err.response.data.msg
          },
          isLoading: false
        });
      });
  };
}

export default Users;
