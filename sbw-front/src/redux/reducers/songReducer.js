

function songReducer(state = { title: "Untitled", id: 1 }, action) {
    switch (action.type) {

        case ("SET_SONG"):
            const ret = { ...action.song }
            return ret

        default: return state
    }
}

export default songReducer;