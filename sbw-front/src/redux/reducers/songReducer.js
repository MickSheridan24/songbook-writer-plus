function songReducer(state = { lines: [{ text: "TEXT" }], upcase: false, }, action) {
    switch (action.type) {
        case ("ShiftDown"):
            return { ...state, upcase: true }
        case ("ShiftUp"):
            return { ...state, upcase: false }
        case ("Enter"):
            return { ...state, }
        case ("TYPE"):
            let key = state.upcase ? action.key.toUpperCase() : action.key
            let text = state.text + key;
            return { ...state, text: text }
        case ("BACKSPACE"):
            return { ...state, text: state.text.slice(0, -1) }
        default: return state
    }
}

export default songReducer;