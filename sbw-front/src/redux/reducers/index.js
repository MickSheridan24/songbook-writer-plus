import { combineReducers } from "redux";
import songReducer from "./songReducer"
import editorReducer from "./editorReducer";
import libraryReducer from "./libraryReducer";
import bookReducer from "./bookReducer";
import workshopUIReducer from "./workshopUIReducer"

const rootReducer = combineReducers({
    song: songReducer,
    editor: editorReducer,
    library: libraryReducer,
    book: bookReducer,
    workshop: workshopUIReducer
});
export default rootReducer;
