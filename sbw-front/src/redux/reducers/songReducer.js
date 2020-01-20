import { EditorState } from "draft-js"

function songReducer(state = { editorState: EditorState.createEmpty(), saving: true, id: 1 }, action) {
    switch (action.type) {
        case ("UPDATE"):
            return { ...state, editorState: action.editorState }
        case ("SET_SAVE"):
            return { ...state, saving: action.saving }
        default: return state
    }
}

export default songReducer;