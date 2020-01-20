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
export { type, keyUp, saveDelta }