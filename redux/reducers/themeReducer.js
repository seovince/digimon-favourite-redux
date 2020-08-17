import { SET_THEME } from '../actions/types.js'

const initialState = {
    isDark: false
}

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_THEME:
            return {
                ...state,
                isDark: action.data
            }
        default:
            return state
    }
}

export default themeReducer