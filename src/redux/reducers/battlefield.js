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
    cells: []
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        // case "BATTLEFIELD:SET_CELLS":
        //     return {
        //         ...state,
        //         cells: payload
        //     };
        default:
            return state;
    }
};