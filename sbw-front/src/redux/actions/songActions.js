
import { convertToRaw, convertFromRaw } from "draft-js"

function fetchSong(id) {
    return async dispatch => {
        const raw = await fetch("http://localhost:4001/songs/" + id, { "accepts": "application/json" })
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
            title: "I updated successfully",
            text: convertToRaw(editor.getCurrentContent())
        }
        await fetch("http://localhost:4001/songs/" + song.id, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(out)
        });
        if (song) {
            console.log("Saved successfully")
        }
    }
}

function updateSong(editor) {
    return { type: "UPDATE", editorState: editor }
}
export { updateSong, fetchSong, saveSong }