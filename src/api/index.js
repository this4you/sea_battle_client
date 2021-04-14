import axios from './axios';

const api =  {
    createGame: postData => axios.post("/create", postData),
    index: () => axios.get("/"),
    join: postData => axios.post("/join", postData),
    cells: () => axios.get("/cell"),
    enemyCells: () => axios.get("/cell/enemy"),
    setCells: postData => axios.post("/cell", postData),
    shoot: postData => axios.post("/cell/shoot", postData),
};

export  default api;