import {createStore, combineReducers} from 'redux'
import favouriteReducer from './reducers/favouriteReducer'
import themeReducer from './reducers/themeReducer'
import digimonReducer from './reducers/digimonReducer'
import modalfilterReducer from './reducers/modalfilterReducer'

const rootReducer = combineReducers({
    favourites: favouriteReducer,
    theme: themeReducer,
    digimons: digimonReducer,
    modalfilter: modalfilterReducer
})

const configureStore = () => createStore(rootReducer)

export default configureStore