import axios from 'axios';

const baseURL = 'https://tom-news-app.herokuapp.com/api';

export const fetchAllArticles = (sort_by, topic) => {
  return axios
    .get(`${baseURL}/articles`, {
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
  return axios.get(`${baseURL}/articles/${id}`).then(response => {
    return response.data.article;
  });
};

export const updateVote = (id, votechange, filt) => {
  return axios
    .patch(`${baseURL}/${filt}/${id}`, { inc_votes: votechange })
    .then(response => {
      console.dir(response);
      return response.data;
    });
};

export const fetchCommentsbyArticleId = id => {
  return axios.get(`${baseURL}/articles/${id}/comments`).then(response => {
    return response.data.comments;
  });
};

export const fetchAllTopics = () => {
  return axios.get(`${baseURL}/topics`).then(response => {
    return response.data.topics;
  });
};

export const removeComment = id => {
  return axios.delete(`${baseURL}/comments/${id}`).then(response => {});
};

export const checkUser = userInput => {
  return axios.get(`${baseURL}/users/${userInput}`).then(response => {
    return response.data.user.username;
  });
};

export const postComment = (id, username, newComment) => {
  return axios
    .post(`${baseURL}/articles/${id}/comments`, {
      username: username,
      body: newComment
    })
    .then(response => {
      return response.data.comment;
    });
};
