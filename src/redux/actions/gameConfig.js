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
    }
}
export default actions;