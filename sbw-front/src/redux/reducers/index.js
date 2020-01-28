import { combineReducers } from "redux";
import songReducer from "./songReducer"
import editorReducer from "./editorReducer";
import libraryReducer from "./libraryReducer";
import bookReducer from "./bookReducer";

const rootReducer = combineReducers({
    song: songReducer,
    editor: editorReducer,
    library: libraryReducer,
    book: bookReducer
});
export default rootReducer;
