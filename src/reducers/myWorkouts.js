const initialState = []

export default (state=initialState, action) => {
    switch(action.type) {
        case "ADD_WORKOUT":
            return state.workouts.concat(action.workout)
    }
}