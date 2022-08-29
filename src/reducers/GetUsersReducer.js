const GET_USERS = "GET_USERS"
const GET_CURRENT_USER = "GET_CURRENT_USER"

const defaultState = {
    users: [],
    currentUser: null
}

export default function GetUsersReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case GET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}

export const setUsers = (users) => ({type: GET_USERS, payload: users})
export const setCurrentUser = (name) => ({type: GET_CURRENT_USER, payload: name})