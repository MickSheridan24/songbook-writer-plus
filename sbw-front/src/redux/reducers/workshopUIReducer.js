

function workshopReducer(state = { chordForm: { active: false } }, action) {
    switch (action.type) {
        case ("SET_CHORD_FORM"):
            return { ...state, chordForm: { ...action.chordForm } }
        default: return state
    }
}

export default workshopReducer;