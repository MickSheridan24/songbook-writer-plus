

function songReducer(state = { title: "Untitled" }, action) {
    switch (action.type) {

        case ("SET_SONG"):
            return { ...action.song }
        case ("SET_TITLE"):
            return { ...state, title: action.title }
        default: return state
    }
}

export default songReducer;