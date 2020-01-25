import { EditorState } from "draft-js"

function songReducer(state = { text: EditorState.createEmpty(), saving: true, id: 1 }, action) {
    switch (action.type) {

        case ("SET_SONG"):
            debugger
            const newText = action.song.text
            const newEditor = EditorState.push(state.text, newText)
            const ret = { ...action.song, text: newEditor, saving: true }
            debugger
            return ret
        case ("UPDATE"):
            return { ...state, text: action.editorState }
        case ("SET_SAVE"):
            return { ...state, saving: action.saving }
        default: return state
    }
}

export default songReducer;