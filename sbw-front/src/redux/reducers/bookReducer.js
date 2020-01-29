

function bookReducer(state = { title: "Untitled", songs: [] }, action) {
    switch (action.type) {

        case ("SET_BOOK"):
            return { ...action.book, songs: [...action.songs] }
        case ("ADD_SONG"):
            return { ...state, songs: [...state.songs, action.song] }

        default: return state
    }
}

export default bookReducer;