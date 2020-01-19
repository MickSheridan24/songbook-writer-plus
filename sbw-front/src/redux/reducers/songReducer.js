function songReducer(state = { text: "TEXT" }, action) {
    switch (action.type) {
        case ("TYPE"):
            let text = state.text + action.key;
            return { ...state, text: text }
        default: return state
    }
}

export default songReducer;