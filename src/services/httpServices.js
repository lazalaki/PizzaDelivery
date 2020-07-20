import axios from 'axios'

const baseUrl = () => 'https://pizza-delivery-novi-sad.herokuapp.com/api'

export const post = (url, body) => axios.post(`${baseUrl()}${url}`, body);

export const get = (url) => axios.get(`${baseUrl()}${url}`);

export const deleteApi = (url) => axios.delete(`${baseUrl()}${url}`);

export const patch = (url, body) => axios.patch(`${baseUrl()}${url}`, body);