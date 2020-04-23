import {combineReducers, createStore} from 'redux'
import profileReducer from './profileReducer'
import dialogReducer from './dialogReducer'
import sideBarReducer from './sideBarReducer'

const reducers = combineReducers({
    profilePage: profileReducer, 
    dialogsPage: dialogReducer,
    sideBar: sideBarReducer
})

export default createStore(reducers)

