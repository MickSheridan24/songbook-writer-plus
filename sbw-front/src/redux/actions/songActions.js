
import { convertToRaw, convertFromRaw } from "draft-js"

function fetchSong(id) {
    return async dispatch => {
        const raw = await fetch("http://localhost:4001/songs/" + id, { "accepts": "application/json" })
        if (raw) {

            const parsed = await raw.json().then(r => {
                return { ...r, text: JSON.parse(r.text) }
            })
            const converted = convertFromRaw(parsed.text)
            const convertedSong = { ...parsed, text: converted }
            dispatch({ type: "SET_SONG", song: convertedSong })
        } else {
            console.log("ERROR: Fetching song")
        }
    }
}

function saveSong(text, id) {
    let mockId = id
    mockId = 7;
    return async (dispatch) => {
        const song = {
            title: "I updated successfully",
            text: convertToRaw(text.getCurrentContent())
        }
        const save = await fetch("http://localhost:4001/songs/" + mockId, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(song)
        });
        if (song) {
            console.log("Saved successfully")
        }
    }
}

function updateSong(text) {


    return async (dispatch) => {


        dispatch({ type: "UPDATE", editorState: text })
    }
}
export { updateSong, fetchSong, saveSong }