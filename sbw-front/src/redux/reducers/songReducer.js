function songReducer(state = { delta: {} }, action) {
    switch (action.type) {
        case ("DELTA"):
            return { ...state, delta: action.delta }

        default: return state
    }
}

export default songReducer;