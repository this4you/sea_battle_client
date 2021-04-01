import api from '../../api'

const actions = {
    setСurrentSize: id => ({
        type: 'GAMECONFIG:SET_CURRENT_SIZE',
        payload: id
    }),

    addShip: () => ({
        type: 'GAMECONFIG:SET_SHIP'
    }),

    readyCheck: () => ({
        type: 'GAMECONFIG:READY_CHECK'
    }),

    setShip: () => dispatch => {
        dispatch(actions.addShip());
        dispatch(actions.readyCheck());
    },

    setGameData: data => ({
        type: "GAMECONFIG:SET_GAME_DATA",
        payload: data
    }),

    setGameStatus: status => ({
        type: "GAMECONFIG:SET_GAME_STATUS",
        payload: status
    }),

    fetchGameInfo: () => dispatch => {
        return api.index().then(({data}) => {
            dispatch(actions.setGameData(data));
        })
    },

    fetchCreateGame: postData => dispatch => {
        return api.createGame(postData)
            .then(({data}) => {
                window.localStorage.setItem("gameId", data?._id)
                window.localStorage.setItem("userId", data?.userA);
                dispatch(actions.setGameData(data));
                return data;
            });
    },

    fetchJoinGame: postData => dispatch => {
        return api.join(postData)
            .then(({data}) => {
                if (data?.status === "success") {
                    debugger
                    window.localStorage.setItem("gameId", data?.game._id)
                    window.localStorage.setItem("userId", data?.user);
                }
                return data;
            });
    },

    fetchGetCells: () => dispatch => {
        return api.cells().then(({data}) => {
            if (data && data.cells)
                dispatch(actions.setCells(data.cells));
        })
    },

    setCells: cells => ({
        type: "GAMECONFIG:SET_CELLS",
        payload: cells
    }),
}
export default actions;