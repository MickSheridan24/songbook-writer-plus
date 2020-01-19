function type(key) {
    return async dispatch => {
        dispatch({ type: "TYPE", key: key })
    }

}
export { type }