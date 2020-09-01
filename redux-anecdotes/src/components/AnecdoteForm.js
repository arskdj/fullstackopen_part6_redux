import React, {useState} from "react"
import {createAnecdote} from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        const newAnecdote = event.target.anecdote.value
        dispatch(createAnecdote(newAnecdote))
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
