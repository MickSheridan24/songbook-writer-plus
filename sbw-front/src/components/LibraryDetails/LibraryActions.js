import API from "../../services/index"

export function fetchBooks() {
    return async (dispatch) => {
        const books = await API.getAllBooks()
        dispatch({ type: "SET_BOOKS", books: books })
    }
}