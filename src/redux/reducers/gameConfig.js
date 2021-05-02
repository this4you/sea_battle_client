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
            };
        case "GAMECONFIG:SET_WOUNDED_CELL":
            return {
                ...state,
                enemyCells: state.enemyCells.map(
                    item => item._id === payload._id ? payload : item
                )
            };
        case "GAMECONFIG:SET_MISSED_CELL":
            return {
                ...state,
                enemyCells: state.enemyCells.map(
                    item => item._id === payload._id ? payload : item
                )
            };
        case "GAMECONFIG:SET_KILL_CELL":
            const oldCells = state.enemyCells.filter((item) => !payload.some(killedCell => killedCell._id === item._id));
            return {
                ...state,
                enemyCells: oldCells.concat(payload).sort(function (a, b) {
                    let aSize = a.y;
                    let bSize = b.y;
                    let aLow = a.x;
                    let bLow = b.x;
                    if (aSize === bSize) {
                        return (aLow < bLow) ? -1 : (aLow > bLow) ? 1 : 0;
                    } else {
                        return (aSize < bSize) ? -1 : 1;
                    }
                })
            };
        case "GAMECONFIG:SET_CAN_SHOOT":
            return {
                ...state,
                canShoot: payload
            };
        default:
            return state;
    }
};