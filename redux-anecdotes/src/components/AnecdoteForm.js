import React, {useState} from "react"
import {createAnecdote} from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

    const onSubmitHandler = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        dispatch(createAnecdote(content))
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

export default AnecdoteForm
