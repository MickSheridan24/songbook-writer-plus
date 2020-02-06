import API from "../../services/index"
import { EditorState, convertToRaw } from "draft-js"

export function createSong(params) {
    return async (dispatch) => {
        const blank = EditorState.createEmpty()
        const text = convertToRaw(blank.getCurrentContent())
        const body = { ...params, text: text, userId: 25 }
        const song = await API.createSong(body)
        if (song) {
            dispatch({ type: "ADD_SONG", song: song })
        }
    }
}

export function fetchBook(id) {
    return async (dispatch) => {
        const book = await API.getBook(id)
        dispatch({ type: "SET_BOOK", book: book, songs: [...book.songs] })
    }
}