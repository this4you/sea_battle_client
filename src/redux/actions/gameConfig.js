const actions = {
    setСurrentSize: id => ({
        type: 'GAMECONFIG:SET_CURRENT_SIZE',
        payload: id
    }),

    setShip: () => ({
        type: 'GAMECONFIG:SET_SHIP'
    })
}
export default actions;