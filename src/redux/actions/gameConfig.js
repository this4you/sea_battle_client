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
    fetchGetEnemyCells: () => dispatch => {
        return api.enemyCells().then(({data}) => {
            if (data && data.cells)
                dispatch(actions.setEnemyCells(data.cells));
        })
    },

    fetchSetCells: postData => dispatch => {
        return api.setCells(postData).then(({data}) => {
            if (data.status === "success") {
                dispatch(actions.setUserReady(true));
            }
            return data;
        })
    },

    fetchShoot: postData => dispatch => {
        return api.shoot(postData).then(({data}) => {
            if (data.status === "success") {
                dispatch(actions.setUserReady(true));
            }
            return data;
        })
    },

    setCells: cells => ({
        type: "GAMECONFIG:SET_CELLS",
        payload: cells
    }),

    setEnemyCells: cells => ({
        type: "GAMECONFIG:SET_ENEMY_CELLS",
        payload: cells
    }),

    setUserReady: isReady => ({
        type: "GAMECONFIG:SET_USER_READY",
        payload: isReady
    }),

    setWoundedCell: cell => ({
        type: "GAMECONFIG:SET_WOUNDED_CELL",
        payload: cell
    }),

    setMissedCell: cell => ({
        type: "GAMECONFIG:SET_MISSED_CELL",
        payload: cell
    }),

    setKilledCells: cells => ({
        type: "GAMECONFIG:SET_KILL_CELL",
        payload: cells
    }),

    setCanShoot: isCanShoot => ({
        type: "GAMECONFIG:SET_CAN_SHOOT",
        payload: isCanShoot
    }),


}
export default actions;