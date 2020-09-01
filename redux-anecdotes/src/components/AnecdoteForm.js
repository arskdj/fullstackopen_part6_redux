import React from "react"
import {createAnecdote} from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'

const AnecdoteForm = ({createAnecdote}) => {

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        const newAnecdote = event.target.anecdote.value
        createAnecdote(newAnecdote)
    }

    return(
        <div>
            <h2>create new</h2>
            <form onSubmit={onSubmitHandler}>
                <div><input name='anecdote' /></div>
                <button>create</button>
            </form>
        </div>
    )
}

export default connect(
    null,
    {createAnecdote}    
)(AnecdoteForm)
