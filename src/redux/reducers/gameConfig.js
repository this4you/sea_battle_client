const initialState = {
    currentShipSize: 1,
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
                currentShipSize: payload
            };
        default:
            return state;
    }
};