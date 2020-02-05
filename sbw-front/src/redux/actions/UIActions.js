function activateChordForm() {
    return { type: "SET_CHORD_FORM", chordForm: { active: true } }
}

function deactivateChordForm() {
    return { type: "SET_CHORD_FORM", chordForm: { active: false } }
}

export { activateChordForm, deactivateChordForm }