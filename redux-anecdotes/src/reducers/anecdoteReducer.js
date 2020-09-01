import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
    console.log('state now: ', state)
    console.log('action', action)

    switch (action.type){
        case 'CREATE': {
            const newAnecdote = action.data.anecdote
            return  state.concat(newAnecdote)
        }
        case 'VOTE': {
            const id = action.data.id
            let newState = []
            newState =  newState.concat(...state)

            const objIndex = state.findIndex(o => o.id === id) 
            const obj = state[objIndex]
            const newObj = { ...obj, votes: obj.votes + 1 }
            newState.splice(objIndex, 1, newObj)

            return newState
        }
        case 'INIT_ANECDOTES':
            return action.data.anecdotes

        default: return state
    }
}


export const vote = (id) => {
    return async dispatch => {
        const anecdote = await anecdoteService.vote(id)
        dispatch({
            type: 'VOTE',
            data : {
                id: anecdote.id
            }
        })   
    }
}

export const initAnecdotes = () => {
    return async (dispatch) => {
        const anecdotes = await anecdoteService.getAll()    
        dispatch({
            type : 'INIT_ANECDOTES',
            data : {
                anecdotes
            }
        })
    }
}

export const createAnecdote = (content) => {
    return async (dispatch) => {
        const anecdote = await anecdoteService.createNew(content)
        dispatch({
            type: 'CREATE',
            data : {
                anecdote
            }
        })
    }

}

export default anecdoteReducer
