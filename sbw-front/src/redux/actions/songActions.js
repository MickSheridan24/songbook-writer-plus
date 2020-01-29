
import { convertToRaw, convertFromRaw } from "draft-js"
import { API } from "../constants"
import { EditorState } from "draft-js"
function fetchSong(id) {
    return async dispatch => {
        const raw = await fetch(API + "songs/" + id, { "accepts": "application/json" })
        if (raw) {
            const parsed = await raw.json()
            const song = { title: parsed.title, id: parsed.id }
            const converted = convertFromRaw(JSON.parse(parsed.text))
            dispatch({ type: "SET_SONG", song: song, editor: converted })
        } else {
            console.log("ERROR: Fetching song")
        }
    }
}

function saveSong(song, editor) {
    return async () => {
        const out = {
            ...song,
            text: convertToRaw(editor.getCurrentContent())
        }
        await fetch(API + "songs/" + song.id, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(out)
        });
        if (song) {
            console.log("Saved successfully")
        }
    }
}

function createSong(params) {
    return async (dispatch) => {
        const blank = EditorState.createEmpty()
        const text = convertToRaw(blank.getCurrentContent())
        const body = { ...params, text: text, userId: 25 }

        const song = await fetch(API + "songs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        }).then(r => r.json())

        if (song) {
            dispatch({ type: "ADD_SONG", song: song })
        }

    }
}

function updateSong(editor) {
    return { type: "UPDATE", editorState: editor }
}
export { updateSong, fetchSong, saveSong, createSong }