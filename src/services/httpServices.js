import axios from 'axios'

const baseUrl = () => 'http://localhost:8000/api'

export const post = (url, body) => axios.post(`${baseUrl()}${url}`, body);

export const get = (url) => axios.get(`${baseUrl()}${url}`)