const initialState = {
    currentShipSize: 1,
    canAddShip: true,
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
    ]
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "GAMECONFIG:SET_CURRENT_SIZE":
            return {
                ...state,
                currentShipSize: payload,
                canAddShip: state.selectrors.filter(
                    item => { return item.size === payload; }
                )[0].count > 0
            };
        case "GAMECONFIG:SET_SHIP":
            return {
                ...state,
                selectrors: state.selectrors.map(
                    item => item.size === state.currentShipSize ? { ...item, count: item.count - 1 } : item
                ),
                canAddShip: state.selectrors.filter(
                    item => { return item.size === state.currentShipSize; }
                )[0].count - 1 > 0
            }
        default:
            return state;
    }
};