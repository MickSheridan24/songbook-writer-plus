

function songReducer(state = { title: "Untitled" }, action) {
    switch (action.type) {

        case ("SET_SONG"):
            const ret = { ...action.song }
            return ret

        default: return state
    }
}

export default songReducer;