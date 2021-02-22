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
        case "USER:SET_DATA":
            return {
                ...state,
                data: payload,
                isAuth: true,
                token: window.localStorage.token
            };
        case "USER:SET_IS_AUTH":
            return {
                ...state,
                isAuth: payload
            };
        default:
            return state;
    }
};