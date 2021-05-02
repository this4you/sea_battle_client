import axios from 'axios';

axios.defaults.baseURL = "http://" + window.location.hostname + ":9009";
console.log(process.env.REACT_APP_SERVER);
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