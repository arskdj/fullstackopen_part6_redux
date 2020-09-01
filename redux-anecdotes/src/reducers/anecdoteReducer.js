const anecdoteReducer = (state = [], action) => {
    console.log('state now: ', state)
    console.log('action', action)

    switch (action.type){
        case 'CREATE': {
            const newAnecdote = action.data.anecdote
            return  state.concat(newAnecdote)
        }
        case 'VOTE': {
            let newState = []
            newState =  newState.concat(...state)

            const objIndex = state.findIndex(o => o.id === action.data.id) 
            const obj = state[objIndex]
            const newObj = { ...obj, votes: obj.votes + 1 }
            newState.splice(objIndex, 1, newObj)
            newState.sort((a,b) => b.votes - a.votes )

            return newState
        }
        case 'INIT_ANECDOTES':
            return action.data.anecdotes

        default: return state
    }
}

export const createAnecdote = (anecdote) => {
    console.log('createAnecdote called')
    return {
        type: 'CREATE',
        data : {
            anecdote
        }
    }

}

export const vote = (id) => {
    console.log('vote called')
    return {
        type: 'VOTE',
        data : {
            id
        }
    }
}

export const initAnecdotes = (anecdotes) => {
    return {
        type : 'INIT_ANECDOTES',
        data : {
            anecdotes
        }
    }    
}


export default anecdoteReducer
