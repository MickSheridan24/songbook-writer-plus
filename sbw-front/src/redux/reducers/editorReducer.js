import { EditorState } from "draft-js"

function editorReducer(state = EditorState.createEmpty(), action) {
    switch (action.type) {

        case ("SET_SONG"):
            const newText = action.editor
            return EditorState.push(state, newText)
        case ("UPDATE"):
            return action.editorState

        default: return state
    }
}

export default editorReducer;