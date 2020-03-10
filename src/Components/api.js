import axios from 'axios';

//const baseURL = 'https://tom-news-app.herokuapp.com/api';

const baseURL = 'https://localhost:5001/api'

export const fetchAllArticles = (sort_by, topic) => {
  console.log(topic)
  return axios
    .get(`${baseURL}/article`, {
      params: {
        sort_by: sort_by,
        topic: topic
      }
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const fetchArticlebyId = id => {
  return axios.get(`${baseURL}/article/${id}`).then(response => {
    return response.data.article;
  });
};

export const updateVote = (id, votechange, filt) => {
  return axios
    .patch(`${baseURL}/${filt}/${id}`, { inc_votes: votechange })
    .then(response => {
      return response.data;
    });
};

export const fetchCommentsbyArticleId = id => {
  
  return axios.get(`${baseURL}/article/${id}/comments`).then(response => {
    return(response.data.comments);
  });
};

export const fetchAllTopics = () => {
  return axios.get(`${baseURL}/topic`).then(response => {
    return response.data.topics;
  });
};

export const removeComment = id => {
  return axios.delete(`${baseURL}/comment/${id}`).then(response => {});
};

export const checkUser = userInput => {
  return axios.get(`${baseURL}/user/${userInput}`).then(response => {
    return response.data.user.name;
  });
};

export const postComment = (id, username, newComment) => {
  return axios
    .post(`${baseURL}/article/${id}/comments`, {
      username: username,
      body: newComment
    })
    .then(response => {
      return response.data.comment;
    });
};

export const fetchAllUsers = () => {
  return axios.get(`${baseURL}/user`).then(response => {
    return response.data.users;
  });
};
