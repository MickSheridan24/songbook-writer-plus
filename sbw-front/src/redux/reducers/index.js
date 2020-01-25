import { combineReducers } from "redux";
import songReducer from "./songReducer"
import editorReducer from "./editorReducer";

const rootReducer = combineReducers({
    song: songReducer,
    editor: editorReducer
});
export default rootReducer;
