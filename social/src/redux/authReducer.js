import { authAPI } from '../api/api'

const SET_USER_DATA = "SET_USER_DATA"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state

    }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.authRequest()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data;
                    dispatch(setAuthUserData(id, email, login))
                }

            })
            .catch((error) => {
                console.log(error)
            })
    }
}

//export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default authReducer;