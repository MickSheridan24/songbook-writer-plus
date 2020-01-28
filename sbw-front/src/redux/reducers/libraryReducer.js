

function libraryReducer(state = { books: [] }, action) {
    switch (action.type) {
        case ("SET_BOOKS"):

            return action.books
        default: return state
    }
}

export default libraryReducer;