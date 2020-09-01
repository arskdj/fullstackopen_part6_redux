import { createStore, combineReducers } from 'redux'
import anecdoteReducer, {initAnecdotes} from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdoteService from './services/anecdotes'

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification : notificationReducer,
    filter : filterReducer
})

const store = createStore(reducer, composeWithDevTools())

anecdoteService.getAll().then((anecdotes) => {
       store.dispatch(initAnecdotes(anecdotes)) 
})

export default store
