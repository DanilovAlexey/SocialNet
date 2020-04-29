import {combineReducers, createStore} from 'redux'
import profileReducer from './profileReducer'
import dialogReducer from './dialogReducer'
import sideBarReducer from './sideBarReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'

const reducers = combineReducers({
    profilePage: profileReducer, 
    dialogsPage: dialogReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

const store = createStore(reducers)

window.store = store 

export default store

