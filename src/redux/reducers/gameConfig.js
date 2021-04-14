const initialState = {
    _id: window.localStorage.gameId,
    userId: window.localStorage.userId,
    cells: [],
    enemyCells: [],
    status: "",
    currentShipSize: 1,
    canAddShip: true,
    readyToBattle: false,
    canShoot: false,
    selectrors: [
        {
            "name": "one",
            "size": 1,
            "count": 4
        },
        {
            "name": "two",
            "size": 2,
            "count": 3
        },
        {
            "name": "three",
            "size": 3,
            "count": 2
        },
        {
            "name": "four",
            "size": 4,
            "count": 1
        }
    ],
    readyUsers: []
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case "GAMECONFIG:SET_CURRENT_SIZE":
            return {
                ...state,
                currentShipSize: payload,
                canAddShip: state.selectrors.filter(
                    item => {
                        return item.size === payload;
                    }
                )[0].count > 0
            };
        case "GAMECONFIG:SET_SHIP":
            return {
                ...state,
                selectrors: state.selectrors.map(
                    item => item.size === state.currentShipSize ? {...item, count: item.count - 1} : item
                ),
                canAddShip: state.selectrors.filter(
                    item => {
                        return item.size === state.currentShipSize;
                    }
                )[0].count - 1 > 0
            }
        case "GAMECONFIG:READY_CHECK":
            return {
                ...state,
                readyToBattle: state.selectrors.filter(
                    item => {
                        return item.count !== 0
                    }
                ).length === 0
            }
        case "GAMECONFIG:SET_GAME_DATA":
            return {
                ...state,
                ...payload,
                userReady: payload?.readyUsers.indexOf(window.localStorage.getItem("userId")) !== -1,
                canShoot: payload?.currentRoundUser === window.localStorage.getItem("userId")
            }
        case "GAMECONFIG:SET_GAME_STATUS":
            return {
                ...state,
                status: payload
            }
        case "GAMECONFIG:SET_CELLS":
            return {
                ...state,
                cells: payload
            };
        case "GAMECONFIG:SET_USER_READY":
            return {
                ...state,
                userReady: payload
            };
        case "GAMECONFIG:SET_ENEMY_CELLS":
            return {
                ...state,
                enemyCells: payload
            }
        default:
            return state;
    }
};