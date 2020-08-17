import { SET_MODALFILTER, SET_RADIOFILTER } from '../actions/types.js'

const initialState = {
    isVisible: false,
    indexSelected: 0
}

const modalfilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MODALFILTER:
            return {
                ...state,
                isVisible: action.data
            }
        case SET_RADIOFILTER:
            return {
                ...state,
                indexSelected: action.data
            }
        default:
            return state
    }
}

export default modalfilterReducer