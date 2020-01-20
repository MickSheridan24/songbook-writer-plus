
import { convertToRaw } from "draft-js"
function saveDelta(d) {
    return { type: "DELTA", delta: d }
}

function type(key) {
    console.log(key)
    switch (key) {
        case "Backspace": return { type: "BACKSPACE" }
        case "Control": return { type: "None" }
        case "Shift": return { type: "ShiftDown" }

        default: return { type: "TYPE", key: key }
    }
}

function keyUp(key) {
    switch (key) {
        case "Shift": return { type: "ShiftUP" }
        default: return { type: "None" }
    }
}

function updateSong(songState) {
    console.log("ACTION")
    const { text, id, saving } = songState
    console.log(text, id, saving)
    return async (dispatch) => {
        console.log(saving)
        if (saving) {
            dispatch({ type: "SET_SAVE", saving: false })
            console.log("saving")
            const song = convertToRaw(text.getCurrentContent())
            fetch("http://localhost:4001/songs/" + id, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(song)
            }).then(r => {
                console.log("IO done")
                dispatch({ type: "SET_SAVE", saving: true })
            }).catch(e => {
                console.log("failed to fetch ", e);
                dispatch({ type: "SET_SAVE", saving: true })
            })
        }

        dispatch({ type: "UPDATE", editorState: text })
    }
}
export { type, keyUp, saveDelta, updateSong }