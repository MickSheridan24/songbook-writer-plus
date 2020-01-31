import { API } from "../constants"

function fetchBooks() {
    return async (dispatch) => {
        const books = await fetch(API + "books").then(r => r.json())
        dispatch({ type: "SET_BOOKS", books: books })
    }
}

function fetchBook(id) {
    return async (dispatch) => {

        const book = await fetch(API + "books/" + id).then(r => r.json())
        dispatch({ type: "SET_BOOK", book: book, songs: [...book.songs] })
    }
}



export { fetchBooks, fetchBook }