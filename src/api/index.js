import axios from './axios';

const api =  {
    createGame: postData => axios.post("/create", postData),
    index: () => axios.get("/"),
    join: postData => axios.post("/join", postData),
    cells: () => axios.get("/cell")
};

export  default api;