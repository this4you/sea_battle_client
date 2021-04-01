import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:9009';
axios.interceptors.request.use(
    config => {
        const gameId = localStorage.getItem("gameId");
        const userId = localStorage.getItem("userId");
        if (gameId) {
            config.headers["gameid"] = gameId;
            config.headers["userid"] = userId;
        }
        return config
    },
    error => {
        return Promise.reject(error)
    });
//axios.defaults.headers.common["gameid"] = window.localStorage.gameid;
export default axios;