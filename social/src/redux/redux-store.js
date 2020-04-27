import {combineReducers, createStore} from 'redux'
import profileReducer from './profileReducer'
import dialogReducer from './dialogReducer'
import sideBarReducer from './sideBarReducer'
import usersReducer from './usersReducer'

const reducers = combineReducers({
    profilePage: profileReducer, 
    dialogsPage: dialogReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer
})

const store = createStore(reducers)

window.store = store 

export default store

