

function bookReducer(state = { title: "Untitled", songs: [] }, action) {
    switch (action.type) {

        case ("SET_BOOK"):
            const ret = { ...action.book, songs: [...action.songs] }
            return ret

        default: return state
    }
}

export default bookReducer;