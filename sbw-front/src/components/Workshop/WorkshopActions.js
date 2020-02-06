
import API from "../../services/index"
import { convertFromRaw, convertToRaw } from "draft-js"

export function updateSong(editor) {
    return { type: "UPDATE", editorState: editor }
}

export function fetchSong(id) {
    return async dispatch => {
        const raw = await API.getSong(id)
        if (raw) {
            const song = { title: raw.title, id: raw.id }
            const converted = convertFromRaw(JSON.parse(raw.text))
            dispatch({ type: "SET_SONG", song: song, editor: converted })
        } else {
            console.log("ERROR: Fetching song")
        }
    }
}

export function saveSong(song, editor) {
    return async () => {
        const out = {
            ...song,
            text: convertToRaw(editor.getCurrentContent())
        }
        return await API.updateSong(out, song.id)
    }
}

export function saveTitle(title, id) {
    return async (dispatch) => {
        const body = { title: title }
        const song = await API.updateSong(body, id)
        if (song) {
            dispatch({ type: "SET_TITLE", title: title })
        }
    }
}

export function activateChordForm() {
    return { type: "SET_CHORD_FORM", chordForm: { active: true } }
}

export function deactivateChordForm() {
    return { type: "SET_CHORD_FORM", chordForm: { active: false } }
}

