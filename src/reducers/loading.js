const initialState = {loading: false}

export default (state = initialState, action) => {
    switch(action.type) {
        case "SHOW_LOADER":
            return {loading: true}
        case "HIDE_LOADER":
            return {loading: false}
        default:
            return state
    }
}

