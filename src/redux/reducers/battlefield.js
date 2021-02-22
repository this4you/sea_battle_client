const items = [];
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        items.push({
            _id: j + " " + i,
            x: j,
            y: i
        });
    }
}

const initialState = {
    cells: items
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