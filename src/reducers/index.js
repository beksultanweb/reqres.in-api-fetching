import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import UserReducer from './UserReducer'
import GetUsersReducer from './GetUsersReducer'

const rootReducer = combineReducers({
    user: UserReducer,
    users: GetUsersReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))