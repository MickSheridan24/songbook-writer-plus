import { EditorState } from "draft-js"

function songReducer(state = { text: EditorState.createEmpty(), saving: true, id: 1 }, action) {
    switch (action.type) {

        case ("SET_SONG"):
            debugger
            return { ...action.song, saving: true }
        case ("UPDATE"):
            return { ...state, text: action.editorState }
        case ("SET_SAVE"):
            return { ...state, saving: action.saving }
        default: return state
    }
}

export default songReducer;