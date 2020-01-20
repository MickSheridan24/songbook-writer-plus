function type(key) {
    console.log("outer")
    return async dispatch => {
        console.log("inner")
        dispatch({ type: "TYPE", key: key })
    }

}
export { type }