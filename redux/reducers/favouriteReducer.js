import { ADD_FAVOURITE, DELETE_FAVOURITE } from '../actions/types.js'

const initialState = {
    favouriteList: []
}

const favouriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVOURITE:
            return {
                ...state,
                favouriteList: state.favouriteList.concat(action.data.name)
            }
        case DELETE_FAVOURITE:
            return {
                ...state,
                favouriteList: state.filter((item) => item.key !== action.key)
            }
        default:
            return state
    }
}

export default favouriteReducer