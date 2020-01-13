import axios from 'axios';

const baseURL= "https://tom-news-app.herokuapp.com/api"

export const fetchAllArticles = () => {
    return axios.get(`${baseURL}/articles`).then(({data}) => {
        return data.articles;
    });
}

export const fetchArticlebyId = id => {
    return axios.get(`${baseURL}/articles/${id}`).then(response => {
        console.log(response.data.article)
        return response.data.article
    })
}