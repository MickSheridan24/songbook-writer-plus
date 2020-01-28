

function libraryReducer(state = { books: [] }, action) {
    switch (action.type) {
        case ("SET_BOOKS"):
            return { books: action.books }
        default: return state
    }
}

export default libraryReducer;