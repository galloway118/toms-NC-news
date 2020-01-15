import axios from 'axios';

const baseURL= "https://tom-news-app.herokuapp.com/api"

export const fetchAllArticles = (sort_by, topic) => {
    return axios.get(`${baseURL}/articles`,{ 
        params:{
            sort_by: sort_by,
            topic: topic
    
    }}).then(({data}) => {
        return data.articles;
    });
}

export const fetchArticlebyId = id => {
    return axios.get(`${baseURL}/articles/${id}`).then(response => {
        return response.data.article
    })
}

export const updateArticleVote = id => {
    return axios.patch(`${baseURL}/articles/${id}`, {inc_votes: 1}).then(response => {
        return response.data.article.votes;   
    })
}

export const fetchCommentsbyArticleId = id => {
    return axios.get(`${baseURL}/articles/${id}/comments`).then(response => {
        return (response.data.comments)
    })
}

export const updateCommentVote = id => {
    return axios.patch(`${baseURL}/comments/${id}`, {inc_votes: 1}).then(response => {
        console.log(response.data.comment)
        return (response.data.comment)
    } )
}

export const fetchAllTopics = () => {
    return axios.get(`${baseURL}/topics`)
    .then(response => {
        return response.data.topics;
    })
}

