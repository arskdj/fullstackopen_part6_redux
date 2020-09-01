const anecdotesAtStart = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
    return {
        content: anecdote,
        id: getId(),
        votes: 0
    }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
    console.log('state now: ', state)
    console.log('action', action)

    switch (action.type){
        case 'CREATE': {
            const newState = state.concat(asObject(action.data.content))
            return newState
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
        default: return state
    }

    return state
}

export const createAnecdote = (content) => {
    console.log('createAnecdote called')
    return {
        type: 'CREATE',
        data : {
            content
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


export default reducer
